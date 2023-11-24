const express = require('express');
const db = require('./config/db');
const route = require('./routes');
const methodOverride = require('method-override');
const path = require('path');

require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('./src/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


db.connect();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route(app);

app.listen(port, () => {
    console.log('listening on port ', port);
});
