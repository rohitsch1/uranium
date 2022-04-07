const express = require('express');
const logger = require('../logger/logger');
const help = require('../util/helper');
const formate = require('../validator/formatter');
const router = express.Router();
var _ = require('lodash');


router.get('/test-me', function(req, res) {
    res.send('My first ever api!')

    console.log("This is 1 problem :")

    logger.welcome()

    console.log("This is 2 problem : ")

    help.date()
    help.month()
    help.batch()

    console.log("This is 3 problem ")

    formate.trim()
    formate.lower()
    formate.upper()


});
router.get('/hello', function(req, res) {
    res.send('My second APi ')
    console.log("First part ")
    console.log(_.chunk(
        ["jan", " feb ", "march", "April", "may ", "june", "july", "aug", "sept", "oct", "nov", "dec "], 3));

    console.log("second part : ")
    console.log(_.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]));

    console.log("third part")
    console.log(_.union([1, 2, 3], [2, 3, 5], [5, 6, 7], [6, 7, 9, 10], [7, 9, 11, 12]));

    console.log(_.fromPairs([
        ["horror", "The Shining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth"]
    ]));
});

module.exports = router;
// adding this comment for no reason