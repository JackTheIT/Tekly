const express = require('express');
const nodemailer = require('nodemailer');
const Subscriber = require('../models/subscriber'); // Adjust the path as necessary
const router = express.Router();

// Create a Nodemailer transporter (adjust your SMTP settings here)
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Or another email service provider
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',  // Use environment variables for security
  },
});

// Endpoint to subscribe a user to the newsletter
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Save the new subscriber to the database
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send a welcome email
    const mailOptions = {
      from: 'your-email@gmail.com', // Sender address
      to: email,                   // Recipient address
      subject: 'Welcome to Tekly Newsletter',
      text: 'Thank you for subscribing to Tekly. You will now receive the latest tech news!',
    };

    // Send email using the transporter
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to subscribe' });
  }
});

module.exports = router;
