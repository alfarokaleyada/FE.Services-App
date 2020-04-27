// set exp and rot
const express = require('express')
const router = express.Router();
const passport = require('passport')

const userController = require('../controllers/users.controller') 
const archController = require('../controllers/arch.controller') 

// let multer = require('multer')
//         mongoose = require('mongoose'),
//         cors = require('cors'),
//         bodyParser = require('body-parser')
//             uuidv4 = require('uuid/v4')



// Auth and Sign up
// const DIR = './public';



// router.get('/test', passport.authenticate('jwt , {session : false}') , (req,res,next) => {
//     return res.send({message: 'hi, you are authenticate'})

// })



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//         console.log(DIR)

//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         console.log(fileName)
//         cb(null, uuidv4() + '-' + fileName)

        
//     }
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });


// const Arch = require("../models/arch.model");










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

// -------- Protected Routes -------- //


// router.post('/arch', upload.single('profileImg'), (req, res, next) => {
//     const url = req.protocol + '://' + req.get('host')
//     const {name, place , area,description ,image , created, profileImg } = req.body;

//     const newArach = new Arch({
//         name,
//         place,
//         area,
//         description,
//         image,
//         created,
//         profileImg: url + '/public/' + req.file.filename
//     });


    //   try {
    //     const saved = await newArach.save();
    //     return res.send({
    //         success:true,
    //         arch: saved
    //     })

//   newArach.save().then(result => {
//         res.send(201)({
//             message: "User registered successfully!",
//             userCreated: {
//                 _id: result._id,
//                 profileImg: result.profileImg
//             }
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err

//             });

//     })
// })




router.get('/arch', archController.get);
router.post('/arch', archController.create );
router.put('/arch/:arch_id', archController.update);
router.delete('/arch/:arch_id', archController.destroy);

// passport.authenticate('jwt', {session: false}) ,
// (req, res, next) =>{
//     return res.send({message: 'hi, you are authenticate',
//     user: req.user
//     })
 
// });


module.exports = router;