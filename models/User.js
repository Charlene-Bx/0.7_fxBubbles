const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    newsLetter:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('User',userSchema)