const express = require("express")
const router = express.Router();
const {createSquad, getAllSquads, getSingleSquad, deleteSingleSquad, deleteAllSquad} = require("../controllers/squad")
const {getAccessToRoute} = require("../middlewares/authorization/auth")
const {checkOwnerAccess} = require("../middlewares/checkMiddlewares")

router.post("/create",getAccessToRoute, createSquad)
router.get("/", getAllSquads)
router.delete("/deleteallsquad", deleteAllSquad)
router.get("/:squad_id", getSingleSquad)
router.delete("/:squad_id",getAccessToRoute, checkOwnerAccess, deleteSingleSquad)
// router.get("/:user_id",checkUserExist, singleUser)


module.exports = router;