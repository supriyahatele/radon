const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

const supiBookControllers=require('../controllers/supiBookControllers')
const supiAuthorControllers=require("../controllers/supiAuthorControllers")
const supiPublisherControllers=require("../controllers/supiPublisherControllers")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)




router.post("/authorcreate", supiAuthorControllers.author)

router.post("/authorpublish", supiPublisherControllers.publish)
router.post("/createBook", supiBookControllers.Book)
router.get("/getBooksWithAuthorPublisher", supiBookControllers.getBooksWithAuthorPublisher)


module.exports = router;