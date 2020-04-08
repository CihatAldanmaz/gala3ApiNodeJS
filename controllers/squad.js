const Squad = require("../models/Squad");
const asyncHandler = require("express-async-handler");
const {resHelper} = require("../helpers/resHelper")

const createSquad = asyncHandler(async(req,res,next) => {
 
   const information = req.body;

    const squad = await Squad.create({
        ...information,
        user:req.user.id
    })
    resHelper(res,squad)
    
})

const getAllSquads = asyncHandler(async (req,res,next) => {
    const squads = await Squad.find();
    resHelper(res,squads)
})

const getSingleSquad = asyncHandler(async(req,res,next) => {

    const squad_id = req.params.squad_id
    const squad = await Squad.findById(squad_id)
    .populate({
        path:"players",
        select: ["name","position"]
    })

    resHelper(res,squad)
    
})


const deleteSingleSquad = asyncHandler(async(req,res,next) => {
    const squad_id = req.params.squad_id;
    await Squad.findByIdAndDelete(squad_id);

    resHelper(res,squad_id)
})

const deleteAllSquad = asyncHandler(async(req,res,next) => {
    await Squad.deleteMany();

    res.status({
        success:true,
        deleted:true
    })
})


module.exports = {
    createSquad,
    getAllSquads,
    getSingleSquad,
    deleteSingleSquad,
    deleteAllSquad
}