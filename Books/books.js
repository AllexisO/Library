// Load Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Load mongoose
const mongoose = require("mongoose");

require("./Book")
const Book = mongoose.model("Book")

// Connection to database
mongoose.connect("mongodb://admin:admin123@ds153552.mlab.com:53552/booksservice", { useNewUrlParser: true },() => {
    console.log("Database is connected!");
});

// Сreate func GET
app.get('/', (req, res) => {
    res.send("This is books service!");
});

// Create func POST
app.post("/book", (req, res) => {
    var newBook = {
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    }

    // Create a mew book with attributes above
    var book = new Book(newBook)

    book.save().then(() => {
        console.log("New Book created!")
    }).catch((err) => {
        if(err){
            throw err;
        }
    });
    res.send("A new book created with success!") // close connection
});

// Running our server
app.listen(4545, () => {
    console.log("\nUp and running! -- This is Books service. Service is running on localhost 4545");
});