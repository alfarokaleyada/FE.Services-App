// --------req model file which is DB  ------- //
const Arch = require("../models/arch.model");


let multer = require('multer'),
    express = require('express'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public';
const archController = {};



// -------- user multer   ------- //

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


// -------- user controller   ------- //


// router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
//     const url = req.protocol + '://' + req.get('host')
//     const user = new Arch({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         profileImg: url + '/public/' + req.file.filename
//     });
//     user.save().then(result => {
//         res.status(201).json({
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

// router.get("/", (req, res, next) => {
//     User.find().then(data => {
//         res.status(200).json({
//             message: "User list retrieved successfully!",
//             users: data
//         });
//     });
// });




// -------- user controller   ------- //

/**
 * sign up logic
 */
archController.get =   async  (req, res, next) => {
    const {user} = req ;
    const query = {
        user :user._id           
    }

    console.log("archController.get one")

   try{
      const result = await Arch.find(query);
      console.log(result)
      return res.send ({
        arch: result 
      })

   } catch(e) {
       next(e);

   }
   console.log(result)

};

console.log("Before archController.Post ")



 archController.create =   router.post ('/arch', upload.single('profileImg'), async (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const {name, place , area,description ,image ,Day, created,profileImg,hight } = req.body;

    const newArach = new Arch({
        name,
        place,
        area,
        description,
        image,
        hight,
        created,
        Day,
        user:req.user,
        profileImg: url + '/public/' + req.file.filename
    });


    // const storage = multer.diskStorage({
    //     destination: (req, file, cb) => {
    //         cb(null, DIR);
    //     },
    //     filename: (req, file, cb) => {
    //         const fileName = file.originalname.toLowerCase().split(' ').join('-');
    //         console.log(fileName)

    //         cb(null, uuidv4() + '-' + fileName)
    //         console.log(fileName)

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






    //  console.log("archController.Post Two")

     try {
        const saved = await newArach.save();
        return res.send({
            success:true,
            arch: saved
        })
          }catch(e){
            next(e);
        
        }
    
    })


//   newArach.save().then(result => {
//         res.status(201).json({
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












 // ------------ update ------------ //
 archController.update = async (req, res, next) => {
   
// call the id and pro 
    const archId = req.params.arch_id;
    const {name, place , area,description ,image , created} = req.body;


// try do update
    try {

        // check if the user has auth
        // const check = await Arch.findOne({_id: archId});
        // if (!check.equals(req.user._id)) {
        //     const err = new Error('this arch opject not for you!')
        //     err.status = 401;
        //     throw err

            
        // }else{
        
        // update if it is the same user    
        const arch = await Arch.update({_id: archId}, {name, place , area,description ,image , created})
        res.send({
            success:true + "updated" 
        })
        }catch(e){
            next(e);
        
        }
    
    }

 archController.destroy = async (req, res, next) => {
     console.log("test one")
    const archId = req.params.arch_id;
    console.log("test two")

    try {
        await Arch.deleteOne({_id: archId})
        res.send({
            success:true + "Deleted" 
        })
    }catch(e){
        next(e);
        }
 
}

//route to delete Fruit
// rchController.destroy = router.post('/arch/:arch_id', (req, res, next) => {
// 	let id = mongoose.Types.ObjectId(req.body._id);
// 	db.Arch
// 		.remove({ _id: id })
// 		.then((Arch) => {
// 			res.json(Arch);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });


 // ------- regusiter in funcation ------- // 



module.exports = archController;

