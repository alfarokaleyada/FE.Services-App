// set exp and rot
const express = require('express')
const router = express.Router();
const passport = require('passport')

const userController = require('../controllers/users.controller') 

// Auth and Sign up
router.post('/register', userController.register);
router.post('/auth', userController.login);


// -------- Customize and protect router -------- //


// -------- Protected Routes -------- //

router.get('/arch', 
passport.authenticate('jwt', {session: false}) ,
(req, res, next) =>{
    return res.send({message: 'hi, you are authenticate'})
});


module.exports = router;