const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite', //which db we are using
    storage: './library.db', //identifies the sqlite db file
    logging: false //controls whether sequelize prints sql queries in the terminal
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connection successful!');
    })
    .catch(error => {
        console.error('Unable to connect to database:', error);
    });