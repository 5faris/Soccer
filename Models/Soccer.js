const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SoccerSchema = new Schema({
    text: {
        type:String,
        required: true
    },
    author: {
        type:String,
        required: true
    },
    date: {
        type:Date,
        defualt: Date.now
    }
})

const Soccer = mongoose.model('Soccer',SoccerSchema);
module.exports=Soccer;