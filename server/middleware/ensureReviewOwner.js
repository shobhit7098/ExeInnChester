const Review = require('../models/Review');

module.exports = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found.' });

    if (review.userId !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to modify this review.' });
    }

    req.review = review;
    next();
  } catch (error) {
    console.error('Ownership check failed:', error);
    res.status(500).json({ message: 'Server error during ownership check.' });
  }
};
