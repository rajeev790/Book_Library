const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  publication_date: {
    type: DataTypes.DATE
  },
  language: {
    type: DataTypes.STRING
  },
  genre: {
    type: DataTypes.STRING
  },
  cover_image: {
    type: DataTypes.STRING
  },
  average_rating: {
    type: DataTypes.DECIMAL(3, 2),
    defaultValue: 0.00
  }
}, {
  timestamps: true
});

// Search books
Book.search = async (query) => {
  // Query to search books based on the title, author, or genre
};

// Rate a book
Book.rate = async (userId, bookId, rating) => {
  // Query to rate a book
};

// Review a book
Book.review = async (userId, bookId, review) => {
  // Query to review a book
};

module.exports = Book;
