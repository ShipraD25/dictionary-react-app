// Requiring our  model
var db = require("../models");
// var express = require("express");
// var app = express();

module.exports = function(app) {

  app.get("/api/words", function (req, res) {

    db.Dictionary.findAll({}).then(function (result) {
      res.json(result);
    })
  })

  app.get("/api/words/:word", function(req, res) {
    db.Dictionary.findOne({
      where : {
        word : req.params.word
      }
    }).then(function(result) {
      res.json(result)
    });
  });

  app.get("/api/letters/:letter", function(req, res) {
    var Op = db.Sequelize.Op;
    // console.log(Op);
    db.Dictionary.findAll({
          where: {
            word: {
              [Op.like]: req.params.letter + '%'
            }
          }
    }).then(function(result) {
      res.json(result)
    });
  });
  // SELECT * FROM student WHERE name LIKE  'C%'
}
