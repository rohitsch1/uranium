const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel.js")

const allController = require('../controllers/allController')

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createNewAuthor", allController.createNewAuthor)





module.exports = router;