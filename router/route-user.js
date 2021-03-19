// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const User =  require('../models/User');

const bcrypt = require('bcrypt');
const saltRounds = 10;

var validator = require('validator');
const session = require('express-session');


// ROUTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.router =(()=>{

    var router = express.Router();                  //Instancie un nouvel objet router

    // Account ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/account')                        
        .get((req,res)=>{
            if (req.session.user === 'undefined') {
                res.redirect('/signin')
            } else {

                res.render('./pages/account',{user: req.session.user, pageActive: 'account'})
            }
        })
    // Signin ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/signin')                        
        .get((req,res)=>{res.render('./pages/signin',{pageActive: 'signin'})})
        .post((req,res)=>{
            if(validator.isEmail(req.body.mail)){
                User.find({"mail": req.body.mail})
                .then(
                    result => {
                        bcrypt.compare(req.body.password, result[0].password, function(err, isCorrect) {
                            if(isCorrect){
                                console.log('mot de passe correct please in', result[0])
                                req.session.user = result[0].mail
                                res.render('./pages/account',{user: req.session.user, pageActive: 'signin' })
                            }else{
                                console.log('mot de passe incorrect')
                                res.redirect('/signin')
                            }
                        });                        
                    }
                )
                .catch(e=>{console.log(e)})
            }else{
                console.log('format e-mail invalid')
                res.redirect('/signin')
            }
        })
    // Signup ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/signup')                        
        .get((req,res)=>{res.render('./pages/signup',{pageActive: 'signup'})})
        .post((req,res)=>{
            if(validator.isEmail(req.body.mail)){
                User.find({
                    "mail": req.body.mail
                })
                .then(
                    result => {
                        if(result.length){
                            res.redirect('/signin')
                        }else{
                            if(req.body.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
                                console.log('il contient des nombres et fais plus de 7 caracteres')
                                if(req.body.confirmPassword === req.body.password){

                                    //crypter le mdp
                                    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                                        let user = new User ({
                                            mail:req.body.mail,
                                            password:hash,
                                            newsLetter:req.body.newsLetter
                                        })
        
                                    user.save()
                                    .then(result=>{console.log('user is in the data biiiim')})
                                    .catch(e=>{
                                        console.log(e)
                                        res.redirect('/signup')
                                    })
                                    });
                                }else{
                                    console.log('mot de passe pas identique')
                                    res.redirect('/signup')
                                }
                            }else{
                                console.log('il ne contient pas de nombres, fait moins de 7 caracteres, pas de majuscule')
                                res.redirect('/signup')
                            }
                        }
                    }
                )
                .catch(e=>{
                    console.log('e:', e)
                })
                res.redirect('/account')
            }else{
                console.log('format e-mail invalide')
                res.redirect('/signup')
            }

            
        })
    return router
})();