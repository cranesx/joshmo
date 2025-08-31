const express = require('express');
const orderRoutes = require('./routes/order');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');

require('dotenv').config();

// Connect to the database
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
