const Author = require('../models/author.js');

module.exports = {
    index: function(req, res){
      Author.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
    },
    create: function(req, res){
      Author.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    remove: function(req, res){
      Author.deleteOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    show: function(req, res){
      Author.findOne({_id: req.params.id})
        .then(task => res.json(task))
        .catch(err => res.json(err))
    },
    update: function(req, res){
        Author.updateOne({_id: req.params.id}, req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    }
}