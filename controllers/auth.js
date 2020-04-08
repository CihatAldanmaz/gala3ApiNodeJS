const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const {sendJwtToClient} = require("../helpers/tokenHelper")
const {comparePassword} = require("../helpers/inputHelper")

const register = asyncHandler(async (req,res,next) => {
    const information = req.body;

    const user = await User.create({
     ...information
    })
    sendJwtToClient(user,res)
})

const login = asyncHandler(async (req,res,next) => {

    const {username, password} = req.body;

    const user = await User.findOne({username}).select("+password")
    if(!comparePassword(password, user.password)){
        console.log("Email and password didn't match")
    }

    sendJwtToClient(user, res)

})



module.exports = {
    register,
    login
}