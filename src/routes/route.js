const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth=require("../middleware/auth.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// /users=endpoint
// userController.createUser= function followed by path/route
// router.post("/users", userController.createUser)=routehandler

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.authenticate,auth.authorise,userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
router.delete('/users/:userId',userController.deleteUser)

module.exports = router;

// auth.authenticate,auth.authorise,
