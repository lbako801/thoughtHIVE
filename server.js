const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const apiConnection = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use(routes);


// Start the API
apiConnection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API running on port localhost:${PORT}`);
  })
});