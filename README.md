# SQL Library Manager

A web application built to help librarians manage their book collections. Users can view, add, update, and delete books through a user-friendly interface instead of interacting directly with a SQLite database.

This project was built using Node.js, Express, Pug, Sequelize, and SQLite as part of the Treehouse Full Stack JavaScript curriculum.

## Features

- **View Books:** Display all books in a table showing their title, author, genre, and publication year.
- **Add Books:** Add new books to the library through a form.
- **Update Books:** Edit existing book information.
- **Delete Books:** Remove books from the collection.
- **Form Validation:** Display error messages when required fields are missing or empty.
- **Error Handling:** Display a custom 404 page when a book or requested page cannot be found.

## Technologies Used

- **JavaScript** — Application logic
- **Node.js** — Server-side JavaScript runtime
- **Express.js** — Web application framework and routing
- **Pug** — Template engine for rendering dynamic HTML
- **Sequelize** — Object-Relational Mapping (ORM) library
- **SQLite** — Database for storing book information
- **HTML/CSS** — Page structure and styling

## Getting Started

Make sure you have Node.js and npm installed on your computer.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd sql_library_manager-v1
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   node app.js
   ```

5. Open your browser and visit:

   http://localhost:3000

The application uses the existing `library.db` SQLite database containing the library's book collection.

## How to Use

### View Books

The home page displays all books currently stored in the database - Each book title is a clickable link.

### Add a Book

Click **Create New Book**, enter the book's information, and submit the form.

### Update a Book

Click a book title to open its editing page. Edit the information and click **Update Book** to save the changes.

### Delete a Book

Open a book's editing page and click **Delete Book** to remove it from the database.

### Form Validation

Title and Author are required fields. If either is missing or empty, the application displays validation errors and preserves the submitted form values.

## Application Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Redirects to the book list |
| GET | `/books` | Displays all books |
| GET | `/books/new` | Displays the new book form |
| POST | `/books/new` | Creates a new book |
| GET | `/books/:id` | Displays the edit book form |
| POST | `/books/:id` | Updates an existing book |
| POST | `/books/:id/delete` | Deletes a book |


