const express = require('express');
const app = express();

app.use(express.json());

//Import All Routes
const products = require('./routes/product')

app.use('/api/', products)

module.exports = app