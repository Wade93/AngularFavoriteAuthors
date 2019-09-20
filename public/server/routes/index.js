const apiRouter = require('express').Router();
const router = require('express').Router();
const authorRouter = require('./author.routes');
const catchAll = require('./catch-all.routes');

apiRouter
  .use('/authors', authorRouter);
module.exports = router.use('/api', apiRouter).use(catchAll);