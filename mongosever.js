 //npm install express mongoose cors

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// MongoDB connection
const MONGO_URI = "mongodb+srv://dhanavel:dhanavel@cluster0.wg2riff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

// Simple Todo model
const Todo = mongoose.model('Todo', {
  task: String
});

// ➕ Create (POST)
app.post('/todos', async (req, res) => {
  const todo = new Todo({ task: req.body.task });
  await todo.save();
  res.json(todo);
});

// 📖 Read (GET)
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// ✏️ Update (PUT)
app.put('/todos/:id', async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, { task: req.body.task }, { new: true });
  res.json(updated);
});

// ❌ Delete (DELETE)
app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
