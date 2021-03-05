// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const Event =  require('../models/Event');

// ROUTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.router =(()=>{

    var router = express.Router();                  //Instancie un nouvel objet router

    // Home ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/')                               //Définis une route, ici, pour le chemin root
        .get((req, res) => {
            res.render('index',{                    //reponse > afficher la page index
                // user: req.session.user              //Envoies les données sous forme de cookies
            });                    
        });

    // Training ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/training')                        
        .get((req,res)=>{res.render('./pages/training')})

    router.route('/tutorials')                        
        .get((req,res)=>{res.render('./pages/tutorials')})
    
    router.route('/agenda')                        
        .get((req,res)=>{
            Event.find({},(e,events)=>{
                res.render('./pages/agenda',{events:events})
            })
            
        })

    router.route('/infos')                        
        .get((req,res)=>{res.render('./pages/infos')})

    router.route('/account')                        
        .get((req,res)=>{res.render('./pages/account')})

    router.route('/signin')                        
        .get((req,res)=>{res.render('./pages/signin')})

    router.route('/signup')                        
        .get((req,res)=>{res.render('./pages/signup')})

    return router
})();