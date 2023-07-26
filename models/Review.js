const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  professionalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professional",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  rating: Number,
  text: String,
});

module.exports = mongoose.model("Review", reviewSchema);
