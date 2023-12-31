const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authController = require('./../controllers/authController');

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );
router.route('/').get(reviewController.getAllReview);

module.exports = router;
