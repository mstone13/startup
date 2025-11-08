import express from 'express';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';  
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));


app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

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


app.post('/api/auth/logout', (req, res) => {
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

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});