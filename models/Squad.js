const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SquadSchema = new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:true
    },
    players:[{
        type:mongoose.Schema.ObjectId,
        ref:"Player"
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Squad", SquadSchema)