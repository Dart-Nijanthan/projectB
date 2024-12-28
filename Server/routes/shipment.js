const express = require('express');
const router = express.Router();
const { createShipment } = require('../controllers/shipment'); // Assuming the controller is saved in controllers folder

// Route to handle shipment creation
router.post('/shipments', createShipment);

module.exports = router;
