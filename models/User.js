const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const UserSchema = new Schema({
    username: {
        type:String,
        required:[true, "Please provide a name"],
        unique:[true, "username already has taken"]
    },
    password: {
        type:String,
        required:[true, "Please provide a password"],
        minlength:[6, "Password must be at least 6 character"],
        select: false
    },
    email: {
        type:String,
        unique:[true, "email has already taken"],
        required:[true, "please provide an email"],
        match : [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email"
        ]
    },
    profile_image: {
        type: String,
        default: "default.jpg"
    },
    squads:[{
        type:mongoose.Schema.ObjectId,
        ref:"Squad"
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

UserSchema.methods.generateJwtFromUser = function(){
    const {JWT_SECRET_KEY} = process.env;

    const payload = {
        id: this._id,
        username:this.name,
        email:this.email
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY)
     
     return token
}

UserSchema.pre("save",function(next){
    if(!this.isModified("password")){
        next();
    }else{

   
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            next();
        })
    })
}
})

module.exports = mongoose.model("User", UserSchema)