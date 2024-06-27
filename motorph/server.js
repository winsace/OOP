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

// API endpoints for users
// Login endpoint
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

// Check if username exists
app.post('/check-username', (req, res) => {
  const { username } = req.body;
  const query = `SELECT COUNT(*) AS count FROM cred WHERE username = ?`;

  connection.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error checking username:', err);
      res.status(500).send('Internal Server Error');
    } else {
      const count = results[0].count;
      if (count === 0) {
        res.status(404).send('Username not found');
      } else {
        res.status(200).send('Username found');
      }
    }
  });
});


// Get all users
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

// Create a new user
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

// Update user details
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

// Delete a user
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

// Get user details by username
app.get('/users/:username', (req, res) => {
  const { username } = req.params;
  const query = `SELECT * FROM cred WHERE username = ?`;

  connection.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error fetching user details:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      res.status(404).send('User not found');
    } else {
      const user = results[0];
      res.json(user);
    }
  });
});

// API endpoints for employees
// Get all employees
app.get('/employees', (req, res) => {
  const query = `SELECT employeeID, firstName, lastName, status FROM employeedb`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching employees:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

// Create a new employee
app.post('/employees', (req, res) => {
  const { employeeID, lastName, firstName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor } = req.body;
  const query = `INSERT INTO employeedb (employeeID, lastName, firstName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(query, [employeeID, lastName, firstName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor], (err, result) => {
    if (err) {
      console.error('Error creating employee:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).json({ message: 'Employee created successfully' });
    }
  });
});

// Delete an employee
app.delete('/employees/:employeeID', (req, res) => {
  const { employeeID } = req.params;
  const query = `DELETE FROM employeedb WHERE employeeID = ?`;

  connection.query(query, [employeeID], (err, result) => {
    if (err) {
      console.error('Error deleting employee:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Employee deleted successfully');
    }
  });
});

// Get employee details by employeeID
app.get('/employees/:employeeID', (req, res) => {
  const { employeeID } = req.params;
  const query = `SELECT * FROM employeedb WHERE employeeID = ?`;

  connection.query(query, [employeeID], (err, results) => {
    if (err) {
      console.error('Error fetching employee details:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      res.status(404).send('Employee not found');
    } else {
      const employee = results[0];
      res.json(employee);
    }
  });
});

// Update employee details by employeeID
app.put('/employees/:employeeID', (req, res) => {
  const { employeeID } = req.params;
  const { lastName, firstName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor } = req.body;
  const query = `UPDATE employeedb SET lastName = ?, firstName = ?, birthday = ?, address = ?, phoneNumber = ?, sss = ?, philhealth = ?, tin = ?, pagibig = ?, status = ?, position = ?, immediateSupervisor = ? WHERE employeeID = ?`;

  connection.query(query, [lastName, firstName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor, employeeID], (err, result) => {
    if (err) {
      console.error('Error updating employee:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Employee updated successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
