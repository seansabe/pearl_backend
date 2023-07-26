const Review = require("../models/Review");

exports.createReview = async (req, res) => {
  const newReview = new Review(req.body);
  try {
    const data = await newReview.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getReview = async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id });
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
