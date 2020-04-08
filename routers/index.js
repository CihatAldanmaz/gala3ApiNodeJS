const express = require("express");

const user = require("./user")
const auth = require("./auth")
const squad = require("./squad")
const player = require("./player")
// const player = require("./player")



const router = express.Router();

router.use("/users",user);
router.use("/auth", auth);
router.use("/squad",squad);
router.use("/player",player)

module.exports = router;