const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/ReviewController");

router.post("/", reviewController.createReview);
router.get("/", reviewController.getReviews);
router.get("/:id", reviewController.getReview);
router.patch("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
