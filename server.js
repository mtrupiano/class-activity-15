const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

app.get("/", function (req, res) {
    // display home HTML
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    // display reservation HTML
    res.sendFile(path.join(__dirname, "reserve.html"));
});


app.get("/reservations", function (req, res) {
    return res.json(reservations);
});

app.post("/reservations", function(req, res) {
    let newRes = req.body;

    reservations.push(newRes);
    res.json(newRes);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});