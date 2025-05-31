const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const auth = require('../middleware/auth');
const ensureReviewOwner = require('../middleware/ensureReviewOwner');

router.get('/', reviewController.getReviews);
router.post('/', auth, reviewController.postReview);
router.put('/:id', auth, ensureReviewOwner, reviewController.updateReview);
router.delete('/:id', auth, ensureReviewOwner, reviewController.deleteReview);

module.exports = router;
