const { Book } = require('./models');

const express = require('express');
const path = require('path');
// const routes = require('./routes/index');

const app = express();
app.use(express.urlencoded({ extended: false }));

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

//recieving edited data when form is submitted
app.post('/books/:id', async (req, res) => {
    console.log('Book ID:', req.params.id);
    
    const  book = await Book.findByPk(req.params.id); //retrieves existing book to be updated
    console.log('Book found:', book);
    
    const { title, author, genre, year } = req.body; //extracts values from form

    
    await book.update({
        title,
        author,
        genre,
        year
    });
    
    res.redirect('/books');
});

//start the http server and listen for incoming connections
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});