"use strict"

const express = require("express");
const app = express();
const path = require("path");

// Middleware to define folder for static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(9000, () => {
  console.log('app is running on port 9000');
});

