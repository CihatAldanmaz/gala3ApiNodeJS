const express = require("express");
const router = express.Router();
const {register, login} = require("../controllers/auth")
const {getAccessToRoute} = require("../middlewares/authorization/auth")

router.post("/", register)
router.post("/login", login)

module.exports = router;