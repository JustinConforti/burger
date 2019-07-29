var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results){
        console.log("results here" +results)
    })
    res.render("index", {burgers: results});
});

// Export routes for server.js to use.
module.exports = router;
