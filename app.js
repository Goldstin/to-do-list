const express = require("express");
const app = express();

var items = [];

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var currentDay = today.toLocaleString("en-US", options);

    res.render("list", {kindOfDay: currentDay, newListItems: items});
});

app.post("/", function(req, res){
    items.push(req.body.newItem);
    
    res.redirect("/")
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});