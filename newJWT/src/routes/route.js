const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth")

// ========[Test]==========
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// ========[Post]==========

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

// ========[Get]==========
router.get("/users/:userId", middleware.authenticate, middleware.authorise, userController.getUserData)

// ========[Put]==========
router.put("/users/:userId",middleware.authenticate, middleware.authorise, userController.updateUser)

// ========[Delete]==========
router.delete("/users/:userId",middleware.authenticate, middleware.authorise, userController.deleteUser)

router.post("/users/:userId/posts", middleware.authenticate, middleware.authorise, userController.postMessage)

module.exports = router;