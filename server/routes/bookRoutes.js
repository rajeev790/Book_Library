const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/search', bookController.searchBooks);
router.get('/:id', bookController.getBookDetails);
router.post('/:userId/rate/:bookId', bookController.rateBook);
router.post('/:userId/review/:bookId', bookController.reviewBook);

module.exports = router;
