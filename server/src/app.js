require('./models');
const morgan = require("morgan");
const cors = require('cors');
const path = require("path");
const routes = require('./routes/routes');
const express = require("express");
const app = express();

app.use([morgan("dev"), cors()]);
app.use([express.json(), express.urlencoded({ extended: false })])
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug')

module.exports = app;