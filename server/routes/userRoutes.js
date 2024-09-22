const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUserProfile);
router.get('/:id/reading-history', userController.getReadingHistory);

module.exports = router;
