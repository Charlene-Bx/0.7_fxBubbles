const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('Event',eventSchema)