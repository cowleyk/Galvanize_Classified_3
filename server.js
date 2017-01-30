'use strict';

const express = require('express');
const app = express();

const path = require('path');



const bodyParser = require('body-parser');
const messages = require('./routes/classifieds');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));

app.use('/classifieds', messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
