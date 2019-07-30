var express = require("express");

// Import the model (cat.js) to use its database functions.

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results){
        console.log("results here" +results)
    })
    res.render("index", {burgers: results});
});

app.post("/", function(req, res){
    console.log(req.body)
  
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    })
    res.redirect("/")
  })

// Export routes for server.js to use.
module.exports = app;
