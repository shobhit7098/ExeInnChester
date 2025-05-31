// require('dotenv').config();
// const connectDB = require('./config/db');
// const express = require('express');
// const cors = require('cors');
// const reviewRoutes = require('./routes/reviewRoutes'); // Fixed path

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/reviews', reviewRoutes);

// // Connect to DB and start server
// connectDB().then(() => {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });


require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/reviews', reviewRoutes);

// 🟡 Serve static React files
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Connect to DB and start server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
