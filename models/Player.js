const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    flagicon:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Player",PlayerSchema)