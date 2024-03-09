const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Route to serve index.html as the entry point
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve employee-login.html
app.get('/employee-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'employee-login.html'));
});

// Route to serve admin-login.html
app.get('/admin-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin-login.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
