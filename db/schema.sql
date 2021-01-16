-- Drops the Database if it exists.
DROP DATABASE IF EXISTS burgers_db;

-- Creating the database and making it use the DB
CREATE DATABASE burgers_db;
USE burgers_db;

-- Creates the table for the burgers
-- The string for burger_name
-- The Boolean for Devoured
CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT, 
burger_name VARCHAR(500) NOT NULL,
devoured BOOLEAN, 
PRIMARY KEY(id)
);
