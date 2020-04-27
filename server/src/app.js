
// Dependencies
const express = require ("express")    // require express
const mongoose = require ('mongoose')  // require mongoose
const logger = require('morgan');
const bodyParser = require('body-Parser');
const passport = require('passport')
const cors = require ('cors')
const cacheControl = require('cache-control');
const v1 = require('./routes/v1') // call routes v1 



// --------------------------------------------------------------

// const routes = require("./routes");
// const PORT = process.env.PORT || 3001;

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
// --------------------------------------------------------------

// Sets up the Express App
const app = express();


// ----------- DB config --------- //


mongoose.connect(process.env.MOMGO_DB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
})    // connect to mango
mongoose.connection.on('connected', () =>{
    console.log('Connected to the database');
});

mongoose.connection.on('error', (err) => {
    console.error("Failed to conect to the database: ${err}");
    }),
                  

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


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "'http://localhost:3000");
    res.header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,");

    next();
  });

app.use(cacheControl());



app.use('/public', express.static('public'));


// -----------  Routes --------- //

app.use('/api/v1', v1); // v1 = require('./routes/v1') // hostname/api1/v1/register


// -----------  ERRORS --------- //

// app.use((req, res, next) => {
//     res.status(404).send({
//         message: 'not found'
//     })
// });

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

