const express = require('express');
const path = require('path');
// const routes = require('./routes/index');

const app = express();
app.set('view engine', 'pug'); //configuring app setting + use pug

//start the http server and listen for incoming connections
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});