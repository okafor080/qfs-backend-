const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy user database
const users = [
  {
    username: 'okafor636',
    password: 'okafor080',
    role: 'admin',
  },
];

// Home Route
app.get('/', (req, res) => {
  res.send('QFS Backend Running Successfully!');
});

// Login Route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: 'Login successful', role: user.role });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Register Route
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((u) => u.username === username);

  if (existingUser) {
    res.status(400).json({ message: 'User already exists' });
  } else {
    users.push({ username, password, role: 'user' });
    res.status(201).json({ message: 'User registered successfully' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

