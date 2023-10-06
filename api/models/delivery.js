const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  nameClient: String,
  deliveryDate: Date,
  startPoint: String,
  endPoint: String,
});

module.exports = mongoose.model("delivery", deliverySchema);
