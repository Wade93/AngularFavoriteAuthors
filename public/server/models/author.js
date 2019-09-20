const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter an author name."]},
  }, {timestamps: true})

module.exports = mongoose.model('Author', AuthorSchema);