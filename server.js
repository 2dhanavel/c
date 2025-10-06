// Import express
const express = require('express');

// Create an express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Sample in-memory data (acts like a small database)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// ---------------- HTTP METHODS ---------------- //

// GET – Retrieve all users
app.get('/users', (req, res) => {
    const nameQuery = req.query.name; // Get query param "name"

  if (!nameQuery) {
    return res.json(users); // No filter → return all
  }

  // Filter users by name (case-insensitive)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameQuery.toLowerCase())
  );

  res.json(filteredUsers);
});

// GET – Retrieve a single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST – Add a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT – Update an existing user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.name = req.body.name || user.name;
  res.json(user);
});

// DELETE – Remove a user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: 'User deleted successfully' });
});

// ------------------------------------------------ //

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});