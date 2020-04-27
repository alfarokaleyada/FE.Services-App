
// ------- require user from db ------ //
const User = require('../models/users.model');

const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


// ---------- create new function pass passport
module.exports = (passport) => {
    let config = {};
    config.secretOrKey = process.env.JWT_SECRET;
    config.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

// Mern Strack app video  26 mins  / user login    
    passport.use(new jwtStrategy(config, async (jwtPayload, done)=>{
        try {
            const user = await User.findById(jwtPayload._id);
            if (user) {
                return done(null, user);

            }else {
                return done (null, false);
            }
                    
                }catch(e){
                    return done(err, false);
                }
    }));
};