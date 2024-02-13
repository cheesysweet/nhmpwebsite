const express = require('express');
var userSchema = require("../models/users");
const router = express.Router();

// Gets all users
router.route("").get((req, res) => {
  userSchema.find(function(err, item) {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json(item)
    });
})

module.exports = router