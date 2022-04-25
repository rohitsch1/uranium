const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const memesController = require('../controllers/memeController')



router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)






// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get('/cowin/getByDistrict', CowinController.getByDistrict)


//question 1 -weather of london 
router.get('/weather', CowinController.londonWeather)

//question 2 - only temperature 
router.get('/weather/temperature', CowinController.temperatureLondonWeather)


//question 3 - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature

router.get('/weather/sort', CowinController.sortBycity)



//memes questions 
//ques-1
router.get('/getAllMemes', memesController.getAllMemes)

//ques-2

router.post('/createMemes', memesController.createMemes)




module.exports = router;