const express = require('express');
var gearSchema = require("../models/gear");
const router = express.Router();

// Gets all items.
router.route("").get((req, res) => {
  gearSchema.find(function(err, item) {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json(item)
    });
})

// Deletes a item with name.
router.route("/:id").delete(function(req, res) {
  const itemId = req.params.id;

  gearSchema.findOne({ _id : itemId }, function(err, mvi) {
      if (err) {
      res.status(404).send(err);
      }
      if (mvi !== null) {
        gearSchema.findOneAndDelete({ _id: itemId }, function(err, item) {
          if (err) {
          res.status(404).send(err)
          }
          res.status(200).json(item)
      });
      } else {
      res.status(404).json({ "message" : "item with name: " + item.Name + " don´t exists"})
      }
  })
})

// This updates a item if it exists within the database. 
router.route("/:id").put(function(req,res){
  const itemId = req.params.id;
  var body =  req.body

  gearSchema.findOneAndUpdate({ _id: itemId}, {
    $set: { Name: body.Name, Type: body.Type, Amount: body.Amount, RestockLevel: body.RestockLevel, ThresholdLevel: body.ThresholdLevel }},
    function(err, item) {
      if (err) {
       res.status(404).json({ "error" : "This gear does not exits, hence no data can be updated"})
      }
      res.json(item)
    });
})


// Adds a item to database.
router.route("").post(function(req, res) {
  var item = new gearSchema();
  var body = req.body;

  gearSchema.findOne({ Name: body.Name, Type: body.Type }, async function(err, storedItem) { // finds out if the item exists in the database
    if (err) {
      res.send(err);
    } else if (storedItem === null) { // stores a new item
      item.Name = body.Name
      item.Type = body.Type
      item.Amount = body.Amount
      item.RestockLevel = body.RestockLevel
      item.ThresholdLevel = body.ThresholdLevel

    await item.save(function(err) {
        if (err) {
        res.status(404).send(err);
        }
    })
    res.status(200).json(item);
    } else {
    res.status(404).json({ "message" : "item with name: " + body.Name + " already exists"});
    } 
  })
})


module.exports = router
