const express = require("express");
const router = express.Router();
const {createPlayer,deletePlayer,allPlayer,deleteAllPlayers} = require("../controllers/player")


router.get("/", allPlayer)
router.post("/", createPlayer);
router.delete("/deleteall", deleteAllPlayers)

//Id generic process
router.delete("/:player_id", deletePlayer)



module.exports = router;