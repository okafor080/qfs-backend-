const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true }));  // For parsing URL encoded data

// Sample user data for demonstration (you can replace this with a real database)
let users = [
  {
    username: 'okafor636',
    password: 'okafor080',
  },
];

// Routes
app.get('/', (req, res) => {
  res.send('QFS Backend Running Successfully!');
});

// Login route (POST /api/login)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username and check password
  const user = users.find((user) => user.username === username);
  if (user && user.password === password) {
    res.status(200).json({ message: 'Login successful', token: 'example-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Register route (POST /api/register)
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  // Add the new user to the users array (replace with a real database in production)
  users.push({ username, password });

  res.status(201).json({ message: 'User registered successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('QFS Backend Running Successfully!');
});

// Example login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'okafor636' && password === 'okafor080') {
    res.status(200).json({ message: 'Login successful', token: 'example-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// **New Registration Route**
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // In a real app, you would hash the password and save it to a database
  // For now, just simulating a user store (you would use a database here)
  if (username === 'okafor636') {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // If everything is good, send success message
  return res.status(201).json({ message: 'User registered successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


