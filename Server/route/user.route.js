const express = require('express');
const router = express.Router();
const {registerUser, postRegister} = require("../controller/user.cont")

router.get("/register", registerUser)
router.post("/register", postRegister)

module.exports = router