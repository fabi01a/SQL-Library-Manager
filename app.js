const { Book } = require('./models');

const express = require('express');
const path = require('path');
// const routes = require('./routes/index');

const app = express();

app.set('view engine', 'pug'); //configuring app setting + use pug

app.use(express.static(path.join(__dirname, 'public'), {
    index: false
}));

//defines the route
app.get('/', (req, res) => {
    res.redirect('/books');
});

//creating books route
app.get('/books', async (req,res) => {
    const books = await Book.findAll();
    res.render('index', { books });
});

//dynamic books route
app.get('/books/:id', async (req,res) => {
    const book = await Book.findByPk(req.params.id);
    res.render('update-book', { book });
});

//start the http server and listen for incoming connections
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});