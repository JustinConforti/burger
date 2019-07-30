var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;

// const csp = require('express-csp-header');
// app.use(csp({
//     policies: {
//         'default-src': [csp.NONE],
//         'img-src': [csp.SELF],
//     }
// }));

// Requiring our models for syncing
 var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
// require("./controller/burgerController.js");

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res){
  console.log(req.body)

  db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
  })
  res.redirect("/")
})



// Syncing our sequelize models and then starting our Express app
// =============================================================
 db.sequelize.sync().then(function() {
   app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
   });
 });
