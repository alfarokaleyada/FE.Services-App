// Dependencies
require('dotenv').config();       // to use .env file
const express = require ("express")    // require express
const mongoose = require ('mongoose')  // require mongoose
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport')
const cors = require ('cors')
const cacheControl = require('cache-control');
const v1 = require('./routes/v1') // call routes v1 
const path = require('path')

// Sets up the Express App
const PORT = process.env.PORT || 3000;

// Sets up the Express App
const app = express();

// ----------- DB Middlewares --------- //

    app.use(cors())
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    

    require('./config/passport')(passport);
    app.use(passport.initialize())
    app.use(passport.session());

    app.use('/public', express.static('public'));

// -----------  Routes --------- //
    app.use('/api/v1', v1); // v1 = require('./routes/v1') // hostname/api1/v1/register


    if (process.env.NODE_ENV === "production") {
        app.use(express.static('client/build'));

        app.get("*", function (request, response) {
            response.sendFile(path.resolve("./client/build/index.html"));
        });

    } 

// ----------- DB config --------- //

    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/expressapp',{
        useNewUrlParser: true,
        useCreateIndex: true,
    })    // connect to mango
    mongoose.connection.on('connected', () =>{
        console.log('Connected to the database');
    });

    mongoose.connection.on('error', (err) => {
        console.error("Failed to conect to the database: ${err}");
        });

// -----------  ERRORS --------- //
    app.use((req, res ,next) => {

        var err = new Error ('not found');
        err.status = 404;
        next(err);
    });

    app.use((err, req ,res , nex) => {
        const status = err.status || 500 ;
        const error = err.message || 'Error Processing your requset'

        res.status(status).send ({
            error
            })
    })


module.exports = app;


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });