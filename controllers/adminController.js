// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const Event =  require('../models/Event');


// ROUTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.router =(()=>{

    var router = express.Router();                  //Instancie un nouvel objet router
    router.route('/')                        
        .get((req,res)=>{res.render('./pages/admin')})

    router.route('/events')                        
        .get((req,res)=>{
            Event.find({}, (err, event) => {
                res.render('./pages/admin/events', { events: event })
            })

        })

    router.post('/event/new', async (req,res)=>{
        //creer un nouveau schema d'Event
        const newEvent= new Event({
            title: req.body.title,
            description: req.body.description,
            place: req.body.place,
            date: Date.parse(req.body.date),
            content: req.body.content,
            category: req.body.category
        })
        try{
            console.log('newEvent:', newEvent);
            await newEvent.save();
            res.redirect('/admin/events');
        }
        catch(e){
            console.log('e:', e);
            res.redirect('/admin/events');
        }
    })    

    return router
})();
