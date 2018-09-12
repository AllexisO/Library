// Load Express
const express = require("express");
const app = express();

// Load mongoose
const mongoose = require("mongoose");

// Connection to database
mongoose.connect("mongodb://admin:admin123@ds153552.mlab.com:53552/booksservice", () => {
    console.log("Database is connected!");
});

app.get('/', (req, res) => {
    res.send("This is books service!");
});

// Running our server
app.listen(4545, () => {
    console.log("Up and running! -- This is Books service");
});