var express = require("express");
var db = require("../models");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
        //burger.selectAll(function (data) {
        // findAll
        // var hbsObject = {
        //     burgers: data
        // };
        db.Burger.findAll({}).then(function(data){
           var hbsObject = {
             burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    // burger.insertOne([
    //     "name", "devoured"
    // ], [
    //     req.body.name, req.body.devoured
    // ], function () {
    //     res.redirect("/");
    // });
    db.Burger.create({
        name: req.body.name,
        devoured: req.body.devoured
    }).then(function(){
        res.direct("/");
    });
});

router.put("/:id", function (req, res) {
    // var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    // burger.updateOne({devoured: req.body.devoured}, condition, function () {
    //     res.redirect("/");
    // });
    db.Burger.updated({
        devoured: req.body.devoured
    },{
        where: {
            id:req.params.id
        }
    }).then(function(){
        res.redirct("/");
    });
});


// Export routes for server.js to use.
module.exports = router;