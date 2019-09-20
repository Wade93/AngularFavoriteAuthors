const router = require('express').Router();
const { AuthorController } = require('../controllers')

module.exports = router
  .get('/', AuthorController.index)
  .post('/', AuthorController.create)
  .get('/:id', AuthorController.show)
  .put('/:id', AuthorController.update)
  .delete('/:id', AuthorController.destroy);