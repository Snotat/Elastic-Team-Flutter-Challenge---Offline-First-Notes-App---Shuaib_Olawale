var express = require("express");
var router = express.Router();
var message = require("../models/notes");

/* GET home page. */
router.get("/", function (req, res, next) {
  message
    .find()
    .then((rest) => {
      console.log(rest);
      res.send(
        "Elastic Team Flutter Challenge - Offline First Notes App - Shuaib Olawale, snotatonline@gmail.com"
      );
    })
    .catch((err) => {
      console.log(err);
      res.send(err.data);
    });
});

module.exports = router;
