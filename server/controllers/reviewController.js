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
    const userId = req.user.id;

    if (!name || !comment || typeof rating !== 'number') {
      return res.status(400).json({ message: 'All fields are required, and rating must be a number.' });
    }

    const newReview = new Review({ name, comment, rating, userId });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    console.error('Error saving review:', err);
    res.status(500).json({ message: 'Failed to save review.' });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { name, comment, rating } = req.body;
    const updated = await Review.findByIdAndUpdate(
      req.params.id,
      { name, comment, rating },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    console.error('Error updating review:', err);
    res.status(500).json({ message: 'Failed to update review.' });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Review deleted successfully.' });
  } catch (err) {
    console.error('Error deleting review:', err);
    res.status(500).json({ message: 'Failed to delete review.' });
  }
};
