const asyncHandler = require("express-async-handler")
const Player = require("../models/Player")
const {resHelper} = require("../helpers/resHelper")

const createPlayer = asyncHandler(async(req,res,next) => {

    const information = req.body;

    const player = await Player.create({
        ...information
    })
    console.log(player)

    resHelper(res,player)

})

const allPlayer = asyncHandler(async(req,res,next) => {
    const players = await Player.find();
    resHelper(res,players)
})

const deletePlayer = asyncHandler(async(req,res,next) => {
    const player_id = req.params.player_id;

    await Player.findByIdAndDelete(player_id)

    resHelper(res,player_id)
})

const deleteAllPlayers = asyncHandler(async(req,res,next) => {
    await Player.deleteMany()

    
    res.status(200)
    .json({
        success:true,
        deletedall:true
    })
})

module.exports = {
    createPlayer,
    deletePlayer,
    allPlayer,
    deleteAllPlayers
}