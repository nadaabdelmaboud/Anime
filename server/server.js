

const express = require('express');
const app = express();
const router = require('express').Router();
const bodyparser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const anime=require('./anime');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(logger('dev'));



const API_PORT = process.env.PORT || 3000;

app.use(function(error, req, res, next) {
    res.status(500);
    res.send({ error: error.message });

});
app.listen(process.env.port || API_PORT, function() {
    console.log('listening for a request');
});
app.use('/api',anime);

module.exports = app;