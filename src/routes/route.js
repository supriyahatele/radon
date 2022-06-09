const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const newBookController= require("../controllers/newBookController");
const newBookModels = require('../models/newBookModels');
const updateBookController=require("../controllers/updateBookControllers");
const authorController=require("../controllers/authorController");


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })
// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", newBookController.createBook  )

router.get("/getbooklist", newBookController.getbooklist)

router.post("/getBooksInYear",  newBookController.getBooksInYear )

router.post("/getParticularBooks",  newBookController.getParticularBooks )

router.get("/getXINRBooks",newBookController.getXINRBooks)

router.get("/getRandomBooks",newBookController.getRandomBooks)



router.post("/createAuthor",authorController.createAuthor)
router.post("/updateBook",updateBookController.updateBook)
router.get("/getBookByAuthor",authorController.getBookByAuthor)
router.get("/getAuthor",authorController.getAuthor)
router.get("/findBook",authorController.findBook)
router.get("/bookByAuthor/author_id",authorController.bookByAuthor)
router.get("/listOfAuthor",authorController.listOfAuthor)
module.exports = router;