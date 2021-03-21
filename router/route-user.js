// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const User =  require('../models/User');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const validator = require('validator');
const session = require('express-session');
const { json } = require('express');

require('../controllers/render.js');
require('../controllers/authentification');


// ROUTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.router =(()=>{

    var router = express.Router();                  //Instancie un nouvel objet router

    // Account ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/account')                        
        .get((req,res)=>{ util_render(req, res, 'account', './pages/account', {error: []}) })

    // Signin ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/signin')                        
        .get((req,res)=>{ util_render(req, res, 'signin', './pages/signin', {error: undefined}) })
        .post((req,res)=>{ util_connect(req, res, User) })

    // Signup ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    router.route('/signup')                        
        .get((req,res)=>{ util_render(req, res, 'signup', './pages/signup', {error: []}) })
        .post((req,res)=>{ util_createAccount(req, res, User) })

    // Logout ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
        router.route('/logout')
        .get((req, res) => { util_disconnect(req, res) })
        
    return router
})();