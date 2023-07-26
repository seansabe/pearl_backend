const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  professionalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professional",
  },
  name: String,
  description: String,
  price: Number,
});

// Add a text index on 'name' and 'description'
serviceSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Service", serviceSchema);
