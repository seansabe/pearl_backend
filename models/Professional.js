const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  services: [
    {
      type: String,
      enum: ["hair", "nails", "makeup", "lash", "skincare"],
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("Professional", professionalSchema);
