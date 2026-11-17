const { Book } = require('./models');

const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug'); //configuring app setting + use pug
app.use(express.static(path.join(__dirname, 'public'), {
    index: false
}));


//redirects homepage to the list of books
app.get('/', (req, res) => {
    res.redirect('/books');
});


//GET: retrieves all books from DB and displays them
app.get('/books', async (req,res) => {
    const books = await Book.findAll();
    res.render('index', { books });
});


//GET: display the form for creating a new book
app.get('/books/new', (req,res) => {
    res.render('new-book');
})


//POST: Create a new book using submitted form data
app.post('/books/new', async (req,res) => {
    try {
        const { title, author, genre, year } = req.body;
        await Book.create({ title,author,genre,year });
        res.redirect('/books');
    
    } catch (error) {
        if(error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            return res.status(400).render('new-book', {
                errors,
                book: req.body
            });
        }
        console.log(error)
        res.status(500).send('Unable to create book');
    }
});


//GET: retrieve a specific book by ID and display its edit form
app.get('/books/:id', async (req,res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
        return res.status(400).render('page-not-found');
    }
    res.render('update-book', { book });
});


//POST: update an existing book using submitted form data
app.post('/books/:id', async (req, res) => {
    try {
        const  book = await Book.findByPk(req.params.id); //retrieves existing book to be updated
        
        if (!book) {
            return res.status(400).send('Book not found');
        }
        
        const { title, author, genre, year } = req.body; //extracts values from form
        await book.update({ title, author, genre, year });
        res.redirect('/books');

    } catch (error) {
        if(error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            return res.status(400).render('update-book', {
                errors,
                book: {
                    id: req.params.id,
                    ...req.body
                }
            });
        }
        console.log(error)
        res.status(500).send('Unable to update book');
    }
});


//POST: delete a specific book from the database
app.post('/books/:id/delete', async (req, res) => {
    const book = await Book.findByPk(req.params.id);

    if(!book) {
        return res.status(400).send('Book not found');
    }

    await book.destroy();
    res.redirect('/books');
});


//start the http server and listen for incoming connections
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});