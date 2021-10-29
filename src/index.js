const express = require('express');
const path = require('path');
const routes = require('./routes');
const initHandlebars = require('./config/handlebars');
//const initDatabase = require('./config/database');


const app = express();
app.use(express.urlencoded({extended: true}));
initHandlebars(app);
//initDatabase(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);


app.listen(5000);