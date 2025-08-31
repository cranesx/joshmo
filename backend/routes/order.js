const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const twilioService = require('../services/twilioService');

router.post('/', async (req, res) => {
  const { customerName, phoneNumber, orderDetails } = req.body;
  if (!customerName || !phoneNumber || !orderDetails) {
    return res.status(400).json({ message: 'Missing order data' });
  }
  try {
    const order = await Order.create({ customerName, phoneNumber, orderDetails });
    // Trigger confirmation call
    twilioService.initiateCall(order);
    res.status(201).json({ message: 'Order received', order });
  } catch (err) {
    res.status(500).json({ message: 'DB error', error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'DB error', error: err });
  }
});

module.exports = router;