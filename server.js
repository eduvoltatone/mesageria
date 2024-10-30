const express = require('express');
const sendMessage = require('./producer');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/send', (req, res) => {
  const { message } = req.body;
  sendMessage(message);
  res.send(`Message sent: ${message}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
