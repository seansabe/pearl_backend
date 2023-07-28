const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  {
    collection: 'users'
  }
);

/*
const User = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    role: String
  }
);
*/

module.exports = mongoose.model("User", User);
