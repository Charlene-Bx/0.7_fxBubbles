// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const Event =  require('../models/Event');


// ROUTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.router =(()=>{

    var router = express.Router();                  //Instancie un nouvel objet router

    // Home ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/')                               //Définis une route, ici, pour le chemin root
        .get((req, res) => {
            console.log(req.session)
            res.render('index',{                    //reponse > afficher la page index
                pageActive: 'home',
                user: req.session.user              //Envoies les données sous forme de cookies
            });                   
        });

    // Training ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/training')                        
        .get((req,res)=>{res.render('./pages/training',{pageActive: 'training', user: req.session.user})})

            


    router.route('/tutorials')                        
        .get((req,res)=>{res.render('./pages/tutorials',{pageActive: 'tutorials', user: req.session.user})})
    
    router.route('/agenda')                        
        .get((req,res)=>{
            Event.find({},(e,events)=>{
                res.render('./pages/agenda',{pageActive: 'agenda', events:events, user: req.session.user})
            }).sort({date:1})
        })

    router.route('/infos')                        
        .get((req,res)=>{res.render('./pages/infos',{pageActive: 'infos', user: req.session.user, error: undefined})})

    return router
})();