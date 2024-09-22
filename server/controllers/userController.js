const User = require('../models/userModel');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reading history
exports.getReadingHistory = async (req, res) => {
  try {
    const readingHistory = await User.getReadingHistory(req.params.id);
    res.json(readingHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other user-related endpoints...
