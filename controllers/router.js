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

    // // Contact ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // router.route('/contact')                        
    //     .get(contact.loadPage)
    //     .post(contact.sendMessage);
    
    // // About -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // router.route('/about')
    //     .get((req,res)=>{res.render('about')});
    
    // // Galery -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // router.route('/gallery')
    //     .get((req,res)=>{res.render('gallery')});

    // // Signin -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // router.route('/register')
    //     .get(user.loadPage_reg)
    //     .post(user.register);

    // // Login -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // router.route('/login')
    // .get(user.loadPage_log)
    // .post(user.login);

    // router.route('/myAccount')
    // .get(user.loadPage_acc)

    // // Shop -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // router.route('/shop')
    // .get(shop.loadPage_main)
    // // .post(user.login);

    // router.route('shop/shop-detail')
    // .get(shop.loadPage_details)

    // router.route('/shop/cart')
    // .get(shop.loadPage_cart)

    // router.route('/shop/checkout')
    // .get(shop.loadPage_checkout)

    // router.route('/shop/wishlist')
    // .get(shop.loadPage_wishlist)

    return router
})();