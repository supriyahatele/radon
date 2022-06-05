const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
// const bookModel =require( "../models/bookModel")
const bookController= require("../controllers/bookController")

router.post('/createBook', bookController.createBook)

router.get('/showBookData',bookController.showBookData)

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")})




     


module.exports = router;