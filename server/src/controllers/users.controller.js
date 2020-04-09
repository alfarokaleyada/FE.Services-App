// --------req model file which is DB  ------- //
const User = require("../models/users.model");
const jwt = require('jsonwebtoken');


// -------- user controller   ------- //
const userController = {};


/**
 * sign up logic
 */

 // ------- regusiter in funcation ------- // 
userController.register = async (req, res ,next) => {
  const {name, email, password, joined } = req.body; // req all input
        // create new user
        const newUser = new User ({                       
            name,
            email,
            password,
            joined 
        });

        // save user or send error 
        try {
            const user = await newUser.save();  
            return res.send ({user})
        }catch(e) {
            if(e.code === 11000 && e.name === "MongoError"){    // edit err on mango
                var error = new Error(`Email address (${newUser.email}) is already taken`)
                next(error)
            }
            next(e)
        }
}


userController.login = async (req, res , next) => {

    // User, pass in requst
        const {email, password} = req.body;
    //Check username and password are ok
        try {
            const user = await User.findOne({email : email})  // ({email in db : email in input})
                if (!user) {
                    const err = new Error(`the email  ${email} was not found on our system`)
                    err.stastus = 401;
                    next(err);
                }


                // call isPassMatch from model
                user.isPassMatch(password, user.password, (err,matched) =>{  // user.passwrod is the pass on db
                    if (matched){
                        // return res.send({message: `you can login`})
                            // if credi okm then create jwt and retun it
                            const secret = process.env.JWT_SECRET;
                            const expire = process.env.JWT_EXPIRATION;

                            const token =jwt.sign({_id: user._id}, secret, {expiresIn: expire})
                            return res.send({token})

                            // Secret
                            //Expiration
                    }

                    res.status(401).send({
                        error: `Invalid username/password combination`
                    })
                })

        }catch(e){
            next(e);
        }

}


module.exports = userController;