'use strict';

var mongoose = require('mongoose'),
  EventModel = mongoose.model('Event');

var sendBackData = function(res, err, data){
  if(err){
    res.send(500);
  } else {
    if(data){
      res.send(200, data);
    } else {
      res.send(404);
    }
  }
};

exports.getAllEvents = function(req, res){
  EventModel.find(function(err, data){
    sendBackData(res, err, data);
  });
};

exports.findSingle = function(req, res){
  EventModel.findById(req.params.id, function(err, data){
    sendBackData(res, err, data);
  });
};

exports.addEvent = function(req, res){
  var model = new EventModel({
    name: req.body.name,
    description: req.body.description
  });

  model.save(function(err){
    if(err){
      res.send(500);
    } else {
      res.send(201);
    }
  });
};
