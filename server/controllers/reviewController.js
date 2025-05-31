const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ message: 'Failed to fetch reviews.' });
  }
};

exports.postReview = async (req, res) => {
  try {
    const { name, comment, rating } = req.body;

    if (!name || !comment || typeof rating !== 'number') {
      return res.status(400).json({ message: 'All fields are required, and rating must be a number.' });
    }

    const newReview = new Review({ name, comment, rating });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    console.error('Error saving review:', err);
    res.status(500).json({ message: 'Failed to save review.' });
  }
};
