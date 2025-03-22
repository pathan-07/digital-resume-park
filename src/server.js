
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you can add code to:
  // 1. Save to a database
  // 2. Send an email
  // 3. Store in a file
  console.log('Received message:', { name, email, message });
  
  res.json({ success: true, message: 'Message received!' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
