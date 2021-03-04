// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
// const contact = require('./controllers/contact_ctr');
// const footer= require('./controllers/newsletter_ctr');
// const user= require('./controllers/user_ctr');
// const shop= require('./controllers/shop_ctr');

// ROUTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.router =(()=>{

    var router = express.Router();                  //Instancie un nouvel objet router

    // Home ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/')                               //Définis une route, ici, pour le chemin root
        .get((req, res) => {
            res.render('index',{                    //reponse > afficher la page index
                user: req.session.user              //Envoies les données sous forme de cookies
            });                    
        });

    // Training ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/training')                        
        .get((req,res)=>{res.render('./pages/training')})

    router.route('/tutorials')                        
        .get((req,res)=>{res.render('./pages/tutorials')})
    
    router.route('/agenda')                        
        .get((req,res)=>{res.render('./pages/agenda')})

    router.route('/infos')                        
        .get((req,res)=>{res.render('./pages/infos')})

    router.route('/account/:id')                        
        .get((req,res)=>{res.render('./pages/account')})

    router.route('/acount/sigin')                        
        .get((req,res)=>{res.render('./pages/signin')})

    router.route('/acount/sigup')                        
        .get((req,res)=>{res.render('./pages/signup')})
    
    router.route('/admin')                        
        .get((req,res)=>{res.render('./pages/admin')})
    

    return router
})();