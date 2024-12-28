const Shipment = require('../models/Shipment'); // Assuming the model is saved in the models folder

// Function to create a new shipment
const createShipment = async (req, res) => {
  try {
    const shipmentData = req.body; // Get the data from the request body

    // Create a new shipment document
    const shipment = new Shipment(shipmentData);

    // Save the document to the database
    await shipment.save();

    // Respond with success
    return res.status(201).json({
      message: 'Shipment saved successfully!',
      shipment: shipment
    });
  } catch (error) {
    console.error('Error creating shipment:', error);
    return res.status(500).json({
      message: 'Error occurred while saving shipment data.',
      error: error.message
    });
  }
};

module.exports = { createShipment };
