//Linking the orm.js file
var orm = require("../config/orm.js");

//Adding the Burger Variables and the callback functions
var burger = {
    selectAll: function(callback) {                                         
        orm.selectAll("burgers", function(res) {                            
            callback(res);
        });
    },
     //Insert function
     insertOne: function (cheese, callback) {
        orm.insertOne("burgers", "burger_name", cheese, function (buns) {
            console.log("burgerJS cheese: ", cheese, "buns: ", buns);
            callback(buns);
        });
    },
    //Update function
    updateOne: function(colVal, id, cb) {
        orm.updateOne(colVal, id, function(res) {
            cb(res);
        });
    },
    //Delete function
    deleteOne: function(id, callback) {
        orm.deleteOne(id, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;