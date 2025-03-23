require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Add these debug lines at the top of your server.js file
console.log("Email config:");
console.log("User:", process.env.EMAIL_USER);
console.log("Pass exists:", !!process.env.EMAIL_PASS);

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    console.log("Attempting to send email...");
    console.log("From:", process.env.EMAIL_USER);
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    
    console.log("Email sent successfully");
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error details:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
