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

// Create multiple users
app.post('/users/create-batch', (req, res) => {
  const users = req.body.users; // Assuming req.body.users is an array of user objects
  const values = users.map(user => [user.username, user.password, user.employee_id, user.role]);
  const query = `INSERT INTO cred (username, password, employee_id, role) VALUES ?`;

  connection.query(query, [values], (err, result) => {
      if (err) {
          console.error('Error creating users:', err);
          res.status(500).send('Internal Server Error');
      } else {
          res.status(201).json({ message: 'Users created successfully' });
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

// Endpoint to delete multiple users (bulk delete)
app.delete('/users', (req, res) => {
  const usernames = req.body.usernames;
  if (!usernames || !Array.isArray(usernames) || usernames.length === 0) {
      return res.status(400).send('Invalid or empty list of usernames');
  }

  let deletedCount = 0;
  usernames.forEach(username => {
      const index = users.findIndex(user => user.username === username);
      if (index !== -1) {
          users.splice(index, 1);
          deletedCount++;
      }
  });

  if (deletedCount > 0) {
      res.status(200).send(`${deletedCount} users deleted successfully`);
  } else {
      res.status(404).send('No users found to delete');
  }
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

// Create multiple employees
app.post('/employees/create-batch', (req, res) => {
  const employees = req.body.employees; // Assuming req.body.employees is an array of employee objects

  // Validate incoming data
  if (!Array.isArray(employees) || employees.length === 0) {
    return res.status(400).json({ error: 'Invalid or empty employee data' });
  }

  // Mapping employee objects to an array of values
  const values = employees.map(employee => [
    employee.employeeID,
    employee.lastName,
    employee.firstName,
    employee.birthday,
    employee.address,
    employee.phoneNumber,
    employee.sss,
    employee.philhealth,
    employee.tin,
    employee.pagibig,
    employee.status,
    employee.position,
    employee.immediateSupervisor
  ]);

  // SQL query to insert multiple rows at once
  const query = `INSERT INTO employeedb 
                 (employeeID, lastName, firstName, birthday, address, phoneNumber, 
                  sss, philhealth, tin, pagibig, status, position, immediateSupervisor) 
                 VALUES ?`;

  // Execute the query with parameterized values
  connection.query(query, [values], (err, result) => {
    if (err) {
      console.error('Error creating employees:', err);
      return res.status(500).send('Internal Server Error');
    } else {
      return res.status(201).json({ message: 'Employees created successfully' });
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

// Endpoint to delete multiple employees (bulk delete)
app.delete('/employees', (req, res) => {
  const employeeIDs = req.body.employeeIDs;
  if (!employeeIDs || !Array.isArray(employeeIDs) || employeeIDs.length === 0) {
    return res.status(400).send('Invalid or empty list of employeeIDs');
  }

  const query = `DELETE FROM employeedb WHERE employeeID IN (?)`;

  connection.query(query, [employeeIDs], (err, results) => {
    if (err) {
      console.error('Error deleting employees:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send(`${employeeIDs.length} employee(s) deleted successfully`);
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

// API endpoints for compensation
// Get all compensation records
app.get('/compensation', (req, res) => {
  const query = `SELECT * FROM compensation`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching compensation data:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

// Create a new compensation record
app.post('/compensation', (req, res) => {
  const { employeeID, basicSalary, riceSubsidy, phoneAllowance, clothingAllowance } = req.body;
  const query = `INSERT INTO compensation (employeeID, basicSalary, riceSubsidy, phoneAllowance, clothingAllowance) VALUES (?, ?, ?, ?, ?)`;

  connection.query(query, [employeeID, basicSalary, riceSubsidy, phoneAllowance, clothingAllowance], (err, results) => {
    if (err) {
      console.error('Error creating compensation:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Compensation created successfully');
    }
  });
});

// Create multiple compensation records
app.post('/compensations/create-batch', (req, res) => {
  const compensations = req.body.compensations; // Assuming req.body.compensations is an array of compensation objects
  const values = compensations.map(compensation => [compensation.employee_id, compensation.basic_salary, compensation.rice_subsidy, compensation.phone_allowance, compensation.clothing_allowance]);
  const query = `INSERT INTO compensation (employeeID, basicSalary, riceSubsidy, phoneAllowance, clothingAllowance) VALUES ?`;

  connection.query(query, [values], (err, result) => {
    if (err) {
      console.error('Error creating compensations:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).json({ message: 'Compensations created successfully' });
    }
  });
});

// API endpoint to fetch compensation details by employeeID
app.get('/compensations/:employeeID', (req, res) => {
  const employeeID = req.params.employeeID;
  const query = `SELECT * FROM compensation WHERE employeeID = ?`;

  connection.query(query, [employeeID], (err, results) => {
    if (err) {
      console.error('Error fetching compensation details:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      res.status(404).send('Compensation not found');
    } else {
      const compensation = results[0];
      res.json(compensation);
    }
  });
});

// Update an existing compensation record by employeeID
app.put('/compensations/:employeeID', (req, res) => {
  const employeeID = req.params.employeeID;
  const { basicSalary, riceSubsidy, phoneAllowance, clothingAllowance } = req.body;
  const query = `UPDATE compensation SET basicSalary = ?, riceSubsidy = ?, phoneAllowance = ?, clothingAllowance = ? WHERE employeeID = ?`;

  connection.query(query, [basicSalary, riceSubsidy, phoneAllowance, clothingAllowance, employeeID], (err, results) => {
    if (err) {
      console.error('Error updating compensation:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Compensation updated successfully');
    }
  });
});

// Delete a compensation record
app.delete('/compensation/:employeeID', (req, res) => {
  const employeeID = req.params.employeeID;
  const query = `DELETE FROM compensation WHERE employeeID = ?`;

  connection.query(query, [employeeID], (err, results) => {
    if (err) {
      console.error('Error deleting compensation:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Compensation deleted successfully');
    }
  });
});

// Endpoint to delete multiple compensations (bulk delete)
app.delete('/compensation', (req, res) => {
  const employeeIDs = req.body.employeeIDs;
  if (!employeeIDs || !Array.isArray(employeeIDs) || employeeIDs.length === 0) {
      return res.status(400).send('Invalid or empty list of employeeIDs');
  }

  const query = `DELETE FROM compensation WHERE employeeID IN (?)`;

  connection.query(query, [employeeIDs], (err, results) => {
      if (err) {
          console.error('Error deleting compensations:', err);
          res.status(500).send('Internal Server Error');
      } else {
          res.status(200).send(`${employeeIDs.length} compensation(s) deleted successfully`);
      }
  });
});



// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
