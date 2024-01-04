const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://sergetechno:stereox87@cluster0.g0dxzhk.mongodb.net/e-commerce'
);

// api creation

app.get('/', (req, res) => {
  res.send('Express App is Running');
});

app.listen(port, (error) => {
  if (!error) {
    console.log('Server Running on Port' + port);
  } else {
    console.log('Error : ' + error);
  }
});
