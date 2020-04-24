const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');

// var cors = require("express");
var api = require('./routes/index');

const mongoUrl = 'mongodb+srv://sanjay:sanjay@cluster0-qgcnz.mongodb.net/test?retryWrites=true&w=majority';

// const mongoUrl = 'mongodb://localhost:27017/node-demo';

const app = express();

mongoose.connect(mongoUrl).then(()=> {
    console.log("DB connected")
}).catch(err => {
    console.log("ERROR => ",err)
})

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',api);

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log("Server running on ",port);
})
