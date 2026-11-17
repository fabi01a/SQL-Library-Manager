const express = require('express');
const path = require('path');
// const routes = require('./routes/index');

const app = express();

app.set('view engine', 'pug'); //configuring app setting + use pug

app.use(express.static(path.join(__dirname, 'public'), {
    index: false
}));

// app.use(express.static(path.join(__dirname, 'public'),{
//     fallthrough: false
// })); //tells express to serve static files from public folder

//defines the route
app.get('/', (req, res) => {
    res.render('index');
});

//start the http server and listen for incoming connections
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});