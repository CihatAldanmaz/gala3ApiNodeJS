const express = require("express")
const router = express.Router();
const {singleUser,getAllUsers} = require("../controllers/user")
const {checkUserExist} = require("../middlewares/checkMiddlewares")


router.get("/deneme", getAllUsers)
// router.get("/:user_id",checkUserExist, singleUser)


module.exports = router;