const express = require('express');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.set('port', config.port);
app.use(routes);

module.exports = app;
