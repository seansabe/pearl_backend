const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

/*
const serviceSchema = new mongoose.Schema({
  userId: ObjectId, // ex. "5f8f8a8a8a8a8a8a8a8a8a8a"
  name: String, // ex. "Haircut"
  description: String, // ex. "A simple haircut"
  price: Number, // ex. 20
  kindOfService: String, // ex. "Hair"
});

// Is this needed? 
// Add a text index on 'name' and 'description'
serviceSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Service", serviceSchema);

*/

const Service = new mongoose.Schema(
  {
    userId: { type: ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    kindOfService: { type: String, required: true }
  },
  {
    collection: 'services'
  }
);

module.exports = mongoose.model("Service", Service);