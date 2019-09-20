const bodyParser = require('body-parser')
const express = require("express");
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

console.log(port)

app.use(express.static(path.resolve('./public/dist/public' )));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./public/server/config/database')

const routes = require('./public/server/routes')
app.use(routes);

app.listen(port, () => console.log(`express server listening on port ${port}`));