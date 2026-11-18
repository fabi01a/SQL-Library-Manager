const { DataTypes } = require("sequelize")

module.exports = (sequelize) => { 
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