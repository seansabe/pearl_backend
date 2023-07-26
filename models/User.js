const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // this should be hashed, not stored as plain text
  email: String,
});

module.exports = mongoose.model("User", userSchema);
