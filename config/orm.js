// Importing MySQL Connection.
var connection = require('../config/connection.js');

//Selecting All ORM
var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
//Inserting a new burger into the DB
    insertOne: function(spongebob, patrick, squidward, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);"
            connection.query(queryString, [spongebob, patrick, squidward], function(err, krustykrab){
                if (err) throw err;
            callback(krustykrab);
        });
        },
//Updating a current burger
        updateOne: function(colVal, id, callback) {
        var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
            connection.query(queryString, [id], function(err, result) {
          
                if (err) throw err;
          
            callback(result);
            });
        },
//Deleting a selected burger 
        deleteOne: function(id, callback) {
            var queryString = "DELETE FROM burgers WHERE " + id + ";";
            connection.query(queryString, [id], function(err, res) {
                if (err) throw err;
                callback(res);
            });
        },
    }
//Exports ORM
module.exports = orm;