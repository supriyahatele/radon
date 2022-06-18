const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowid/getDistrict", CowinController.getDistrict)
router.get("/weather", CowinController.weather)
router.get("/onlyweather", CowinController.onlyweather)  
router.get("/getSortedCities", CowinController.getSortedCities)
router.get("/getmemes", CowinController.getmemes)
router.post("/meme", CowinController.meme)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;