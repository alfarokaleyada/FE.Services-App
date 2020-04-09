const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');

const { Schema } = mongoose;

const UserSchema = Schema({

    name: {type: String},
    email: {type: String, required: true, index: true, unique: true},
    password: {type: String,  required: true},
    joined: {type: Date, default: new Date()}
})



// Before password save you should .. 
UserSchema.pre('save', async function(next) {
    // check new account or password is modifdied
    if (!this.isModified('password')) {
        return next();
    }

    //Encrpt the password
    try{
        const salt = await bcrypt.genSalt(10)                  // gen salt
        const hash = await bcrypt.hash(this.password, salt);   // do hash for passwrod by salt 
        this.password = hash;
        next()

    } catch(e){
        return next(e)
    }

});


// --------- match passwrod on mode -------- //

// isPassMatch name of func / compare bet passwrod and hashed
UserSchema.methods.isPassMatch = function (password, hashed , callback) {
    bcrypt.compare(password, hashed, (err, success) => {
        if (err) {
            return callback(err);
        } else {
        callback(null, success);
    }
    });

};

const User = mongoose.model('User', UserSchema); // User as name
module.exports = User;