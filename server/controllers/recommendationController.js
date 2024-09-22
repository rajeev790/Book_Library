const Recommendation = require('../models/recommendationModel');

// Get recommendations for a user
exports.getRecommendations = async (req, res) => {
  try {
    const recommendations = await Recommendation.getForUser(req.params.id);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other recommendation-related endpoints...
