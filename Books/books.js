// Load Express
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("This is books service!");
});

// Running our server
app.listen(4545, () => {
    console.log("Up and running! -- This is Books service");
});