// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const bcrypt = require('bcrypt');
const saltRounds = 10;

const validator = require('validator');

require('./render');

// UTILS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
util_connect = (req, res, DB_collection) => {
    if(validator.isEmail(req.body.mail)){
        DB_collection.find({"mail": req.body.mail})
        .then(
            result => {
                if(result.length){
                    bcrypt.compare(req.body.password, result[0].password, function(err, isCorrect) {
                        if(isCorrect){
                            req.session.user = result[0]._id
                            if(result[0].isAdmin){
                                res.redirect('/admin');
                            }else{
                               res.redirect('/account'); 
                            }
                            
                        }else{
                            util_render(req, res, 'signin', './pages/signin', {error: "Wrong password"})
                        }
                    });  
                }else{
                    util_render(req, res, 'signin', './pages/signin', {error: "Email not found"})
                }
            }
        )
        .catch(e=>{console.log(e)}) 
    }else{
        util_render(req, res, 'signin', './pages/signin', {error: "Email format invalid"})
    }
};

util_createAccount = (req, res, DB_collection) => {
    if(validator.isEmail(req.body.mail)){
        DB_collection.find({
            "mail": req.body.mail
        })
        .then(
            result => {
                if(result.length){
                    util_render(req, res, 'signup', './pages/signup', {error: ['email', "It seems that this email is already in use"]})
                }else{
                    if(req.body.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
                        if(req.body.confirmPassword === req.body.password){
                            //crypter le mdp
                            bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                                let user = new DB_collection ({
                                    mail:req.body.mail,
                                    password:hash,
                                    newsLetter:req.body.newsLetter
                                })

                            user.save()
                            .then(result=>{
                                req.session.user = result._id;
                                res.redirect('/account');
                            })
                            .catch(e=>{
                                console.log(e)
                                util_render(req, res, 'signup', './pages/signup', {error: "An obscure error has been encountered"})
                            })
                            });
                        }else{
                            util_render(req, res, 'signup', './pages/signup', {error: ['password', "The passwords must be identical"]})
                        }
                    }else{
                        util_render(req, res, 'signup', './pages/signup', {error: ['password', "The password is too weak"]})
                    }
                }
            }
        )
        .catch(e=>{
            console.log('e:', e)
        })
    }else{
        util_render(req, res, 'signup', './pages/signup', {error: ['email', "The email format is invalid"]})
    }
};

util_disconnect = (req, res) => {
    if (req.session.user){
        req.session.destroy(err => {
            if(err) {
                res.status(400).send('Unable to log out')
            } else {
                console.log('user has been disconected')
                res.redirect('/signin')
            }
        })
    } else {
        console.log('user hasn\'t been disconected')
        res.redirect('/signin')
    }
}
