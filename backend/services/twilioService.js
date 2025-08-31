const asrService = require('./asrService');
const chatgptService = require('./chatgptService');
const ttsService = require('./ttsService');
const Order = require('../models/order');

async function initiateCall(order) {
  const customerSpeech = await asrService.recognizeSpeech(order.phoneNumber);
  const interpretation = await chatgptService.analyzeConfirmation(customerSpeech);
  await ttsService.speakToCustomer(order.phoneNumber, interpretation.reply);

  // Update order status in DB
  await Order.findByIdAndUpdate(order._id, {
    status: 'completed',
    result: interpretation.confirmed ? 'confirmed' : 'rejected'
  });
}

module.exports = { initiateCall };