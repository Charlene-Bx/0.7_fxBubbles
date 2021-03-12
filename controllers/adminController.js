// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const Event =  require('../models/Event');
const Video = require('../models/Video');
const Cours = require('../models/Cours')


// ROUTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.router =(()=>{

    var router = express.Router();                  //Instancie un nouvel objet router
    router.route('/')                        
        .get((req,res)=>{res.render('./pages/admin')})

    router.route('/events')                        
        .get((req,res)=>{
            Event.find({}, (err, event) => {
                res.render('./pages/admin/admin_events', { events: event })
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
            category: req.body.category,
            image: req.body.image
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
    router.route('/edit/:id')
    .get((req, res) => {
        const id = req.params.id;
        Event.find({}, (err, event) =>{
            res.render('./pages/admin/eventEdit.ejs', {events: event, idEvent: id});
        })
    })
    .post((req, res) => {
        const id = req.params.id;
        Event.findByIdAndUpdate(id, {content: req.body.content, date:req.body.date, title: req.body.title, description: req.body.description, place: req.body.place, category: req.body.date}, err =>{
            if (err) return res.send(500, err);
            res.redirect('/admin')
        })
    })

    router.route('/video')                        
        .get((req,res)=>{
            Video.find({}, (err, video) => {
                res.render('./pages/admin/admin_video', {videos: video})
            })

        })
        router.post('/video/new', async (req,res)=>{
            //creer un nouveau schema d'Event
            const newVideo= new Video({
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                video: req.body.video
            })
            try{
                console.log('newVideo:', newVideo);
                await newVideo.save();
                res.redirect('/admin/video');
            }
            catch(e){
                console.log('e:', e);
                res.redirect('/admin/video');
            }
        })
        router.route('/cours')                        
        .get((req,res)=>{
            Cours.find({}, (err, cours) => {
                res.render('./pages/admin/admin_cours', {courss: cours})
            })

        })
        router.post('/cours/new', async (req,res)=>{
            //creer un nouveau schema d'Event
            const newCours= new Cours({
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                cours: req.body.cours
            })
            try{
                console.log('newCours:', newCours);
                await newCours.save();
                res.redirect('/admin/cours');
            }
            catch(e){
                console.log('e:', e);
                res.redirect('/admin/cours');
            }
        })        
    return router
})();
