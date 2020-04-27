// set exp and rot
const express = require('express')
const router = express.Router();
const passport = require('passport')

const userController = require('../controllers/users.controller') 
const archController = require('../controllers/arch.controller') 




router.post("/register", userController.register);
console.log("'/register ")
router.post('/login', userController.login);
router.delete("/logOut", userController.logOut);



// -------- Customize and protect router -------- //
router.all('*', (req, res, next) => {
    passport.authenticate('jwt', {session:false}, (err,user) => {

        if (err || !user) {
            const error = new Error (`Your are not authoriced to acess this area`)
            error.status = 401;
            console.log("jwt = Your are not authoriced to acess this area")
            console.log(user)
            console.log(err)

            throw error
        }
        console.log(req.user)

        req.user = user;
        console.log(req.user)

        return next();
   }) (req, res ,next);   


});



router.get('/arch', archController.get);
router.post('/arch', archController.create );
router.put('/arch/:arch_id', archController.update);
router.delete('/arch/:arch_id', archController.destroy);


module.exports = router;