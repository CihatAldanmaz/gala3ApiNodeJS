const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const {resHelper} = require("../helpers/resHelper")

const singleUser = asyncHandler(async (req,res,next) => {

    const id = req.params.user_id
    const user = await User.findById(id)
    .populate("squads")
   
    resHelper(res,user)

})

const getAllUsers = asyncHandler(async (req,res,next) => {

  const users = await User.find()
    
    resHelper(res,users)

})


module.exports = {
    singleUser,
    getAllUsers
}