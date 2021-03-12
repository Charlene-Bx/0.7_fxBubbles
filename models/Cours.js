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
    category:{
        type:String,
        required:true
    },
    cours:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('Cours',eventSchema)