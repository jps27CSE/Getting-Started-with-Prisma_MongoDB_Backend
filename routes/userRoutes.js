const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/userControllers");
const { sign } = require("jsonwebtoken");

router.route("/signup").post(signup);

module.exports = router;
