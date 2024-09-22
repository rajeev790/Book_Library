const Book = require('../models/bookModel');

// Search for books
exports.searchBooks = async (req, res) => {
  try {
    const query = req.query.q;
    const books = await Book.search(query);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get book details
exports.getBookDetails = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Rate a book
exports.rateBook = async (req, res) => {
  try {
    const { rating } = req.body;
    await Book.rate(req.params.userId, req.params.bookId, rating);
    res.status(200).json({ message: 'Rating submitted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Review a book
exports.reviewBook = async (req, res) => {
  try {
    const { review } = req.body;
    await Book.review(req.params.userId, req.params.bookId, review);
    res.status(200).json({ message: 'Review submitted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other book-related endpoints...
