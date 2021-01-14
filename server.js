const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

const waitList = [];

app.get("/", function (req, res) {
    // display home HTML
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    // display tables HTML
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    // display reservation HTML
    res.sendFile(path.join(__dirname, "reserve.html"));
});


app.get("/reservations", function (req, res) {
    // console.log(reservations);
    // console.log(waitList);
    return res.json(reservations);
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/waitlist", function (req, res) {
    return res.json(waitList);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

app.post("/reservations", function(req, res) {
    let newRes = req.body;
    // console.log(newRes);

    if (reservations.length < 5) {
        reservations.push(newRes);
        return res.json(true);
    } else {
        waitList.push(newRes);
        return res.json(false);
    }
    
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});