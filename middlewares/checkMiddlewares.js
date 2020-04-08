const User = require("../models/User")
const asyncHandler = require("express-async-handler");
const Squad = require("../models/Squad")


const checkUserExist = asyncHandler(async(req,res,next) => {
    const id = req.params.user_id
    const user = await User.findById(id)

    if(!user){
        console.log("User is not exist")
    }else{

        next();
    }
})

const checkOwnerAccess = asyncHandler(async(req,res,next) => {
    const user_id = req.user.id;
    const squad_id = req.params.squad_id;

    const squad = await Squad.findById(squad_id);

    if(squad.user != user_id){
        console.log("You are not owner for this route")
    }else{
        next();
    }
    
    
})

module.exports = {
    checkUserExist,
    checkOwnerAccess
    
}