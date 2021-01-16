//Requiring Express
var express = require("express");
//Linkning the burger.js file
var burger = require("../models/burger.js")
//Express Router
var router = express.Router();

//Code for the GET REQUEST
router.get("/", function (req, res) {
    burger.selectAll(function (data) {                
        var burgerBurger = {
            burgers: data
        };
        res.render("index", burgerBurger);
    });
});

//Code for the POST REQUEST that CREATES
router.post("/insertOne", function (req, res) {
    burger.insertOne(req.body.burger_name, function (cheese) {
        res.redirect("/")
    });
});

//Code for the POST REQUEST that UPDATES
router.post("/updateOne/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function () {
                  
        res.redirect("/");
    });
});

//Code for the POST REQUEST that DELETES
router.post("/deleteOne/:id", function (req, res) {   
    var condition = "id = " + req.params.id;              
    burger.deleteOne(condition, function () {
        res.redirect("/");
    });
});

module.exports = router;         