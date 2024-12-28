const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const shipmentRoutes = require('./routes/shipment'); // Assuming routes are saved in routes folder

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection (MongoDB)
mongoose.connect('mongodb://localhost:27017/Blushawk', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Use the shipment routes
app.use('/api', shipmentRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
