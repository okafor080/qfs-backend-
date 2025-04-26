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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
