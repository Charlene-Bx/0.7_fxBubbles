// REQUIREMENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');

//// CREATION SESSION ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.set('trust proxy', 1) 
app.use(session({
  secret: process.env.APP_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))    

//// CONFIGURATION EXPRESS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(express.static('public/asset'));                     //Chercher les feuilles de style, et tout ce qui est statique                  
app.use(express.urlencoded({extended: true}));               //récupére les paramétres fournies dans une requête http
// app.set('views', __dirname + '/views');                   //les "views" se trouve dans le fichier /views (pas obligé de preciser dans ce cas-ci)
app.set('view engine','ejs');




// MODULE CONTROLLER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const connectDB = () => {
    //connexction à la DB
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, ()=>{
        console.log('DataBase is connected!');
        app.listen(process.env.APP_PORT, ()=> console.log(`The server is running on the port ${process.env.APP_PORT}`))
    });
};

//se connecter à la db
connectDB();

// const createCollection = (collection,shema)=> {
//     const modelData = mongoose.model(collection,shema);
//     return modelData
// }
// // const userEmail = new modelData;
// module.exports= {
//     connectDB:connectDB,
//     createCollection:createCollection
// }


// ROUTES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const basic_router = require('./routers/basic_router');
// app.use(basic_router);
const router = require('./router/route-general').router;
const admin = require('./router/route-admin').router;
const user = require('./router/route-user').router;

app.use('/',router);            //rouge generale
app.use('/',user);              //route user 
app.use('/admin',admin);        //route admin