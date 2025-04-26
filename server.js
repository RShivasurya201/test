// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Basic endpoint
app.get('/test', (req, res) => {
  console.log('Endpoint was called!');
  res.send('Hello from the server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
