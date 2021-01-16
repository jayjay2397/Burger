const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

const exphbs = require('express-handlebars');

const routes = require('./controllers/burgers_controller.js');

//Using the Public folder 
app.use(express.static('public'));

//Parses JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting the Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Calling the routes and adding listner for the port.
app.use(routes);
app.listen(PORT, function() {
    console.log(`Listening on: http://localhost:${PORT}`);
  });
  