const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArchSchema = Schema({

    
    name: {type: String  },
    place: {type: String},
    area: {type: Number },
    description : {type: String },
    image: {type: String  },
    created: {type: Date, required: true},
    profileImg: {type: String},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})


const Arch = mongoose.model('arch', ArchSchema); // User as name
module.exports = Arch;