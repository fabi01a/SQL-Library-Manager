const { DataTypes } = require("sequelize")

module.exports = (sequelize) => { //exporting a function that accepts a sequelize instance
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Title is required'
                }
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Author is required'
                }
            }
        },
        genre: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.INTEGER
        }
    });
    return Book;
};