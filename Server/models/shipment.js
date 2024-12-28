const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  petName: { type: String, required: true },
  petType: { type: String, required: true },
  fromAddress: {
    streetName: { type: String, required: true },
    city: { type: String, required: true },
  },
  toAddress: {
    streetName: { type: String, required: true },
    city: { type: String, required: true },
  }
});

module.exports = mongoose.model('Shipment', shipmentSchema);
