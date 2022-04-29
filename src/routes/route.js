const express = require('express');
const router = express.Router();

const developerController = require("../controllers/developerController")
const batchController = require('../controllers/batchController')

const { route } = require('express/lib/application');



router.post("/branchCreate", batchController.createBranch)
router.post("/createDeveloper", developerController.createDeveloper)
router.get("/scholarship", developerController.scholarshipDevelopers)
router.get("/developers", developerController.developers)


// router.post('/createPublisher', publisherController.createPublisher)

// router.post("/createBook", bookController.createBook  )

// router.get('/get-all-books', bookController.fetchbooks)

// router.put('/books', bookController.updateBooks)

module.exports = router;