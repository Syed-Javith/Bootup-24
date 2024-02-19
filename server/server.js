const express = require('express');
const connectToDB = require('./db');

const app = express();

connectToDB();

app.listen(8000,() => {
    console.log("Server connected at PORT:8000");
});