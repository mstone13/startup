import express from 'express';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';  
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.argv[2] || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))

const users = {};


app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users[username] = { username, password: hashedPassword };
  res.json({ message: 'Registered successfully' });
});


app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.cookie('username', username, { httpOnly: true });
  res.json({ message: 'Login successful', username });
});


app.delete('/api/auth/logout', (req, res) => {
  res.clearCookie('username');
  res.json({ message: 'Logged out' });
});


app.get('/api/secret', (req, res) => {
  const username = req.cookies.username;
  if (!username) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json({ message: `Welcome, ${username}!` });
});

app.get('/api/duck', async (req, res) => {
  try {
    const response = await fetch("https://random-d.uk/api/v2/random");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching duck:", err);
    res.status(500).json({ error: "Failed to fetch duck" });
  }
});

app.use(express.static(path.join(__dirname, 'src')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});