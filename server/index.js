require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const reviewRoutes = require('./routes/reviewRoutes'); // Fixed path

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/reviews', reviewRoutes);

// Connect to DB and start server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
