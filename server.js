var express = require("express");
var cors = require('cors')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;



// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
