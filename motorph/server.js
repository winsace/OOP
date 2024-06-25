const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.static('src'));
app.use(express.json()); // To parse JSON bodies

// Database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Serve index.html as the entry point
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// API endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM cred WHERE username = ? AND password = ?`;

  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      res.status(401).send('Invalid username or password');
    } else {
      const user = results[0];
      res.json({ role: user.role });
    }
  });
});

// API endpoint to fetch all users
app.get('/users', (req, res) => {
  const query = `SELECT * FROM cred`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

// API endpoint to create a new user
app.post('/users', (req, res) => {
  const { username, password, employee_id, role } = req.body;
  const query = `INSERT INTO cred (username, password, employee_id, role) VALUES (?, ?, ?, ?)`;

  connection.query(query, [username, password, employee_id, role], (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).json({ message: 'User created successfully' });
    }
  });
});

// API endpoint to update user details
app.put('/users/:username', (req, res) => {
  const { username } = req.params;
  const { password, employee_id, role } = req.body;
  const query = `UPDATE cred SET password = ?, employee_id = ?, role = ? WHERE username = ?`;

  connection.query(query, [password, employee_id, role, username], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('User updated successfully');
    }
  });
});

// API endpoint to delete a user
app.delete('/users/:username', (req, res) => {
  const { username } = req.params;
  const query = `DELETE FROM cred WHERE username = ?`;

  connection.query(query, [username], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('User deleted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
