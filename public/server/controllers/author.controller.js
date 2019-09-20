const Author = require('../models/author.js');
const http = require('http-status-codes');

module.exports = {
    index(_req, res){
      Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.status(http.METHOD_FAILURE).json(err))
    },
    create(req, res){
      Author.create(req.body)
        .then(author => res.status(http.CREATED).json(author))
        .catch(err => {
          const errors = Object.keys(err.errors).map(key => err.errors[key].message);
          res.status(http.CONFLICT).json(errors);
        })
    },
    show(req, res){
      Author.findOne({_id: req.params.id})
        .then(author => {
          if (!author){
            throw new Error('Not Found!');
          }
          res.json(author)
        })
        .catch(err => res.status(http.BAD_REQUEST).json(err))
    },
    update(req, res){
        Author.updateOne({_id: req.params.id}, req.body, { new: true, runValidators: true })
        .then(author => res.json(author))
        .catch(err => res.status(http.EXPECTATION_FAILED).json(err));
    },
    destroy(req, res){
      Author.deleteOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(http.FORBIDDEN).json(err))
    }
}