const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: Date,
  time: String, // y might want a different type for this
});

module.exports = mongoose.model("Booking", bookingSchema);
