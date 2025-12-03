const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const fetch = require('node-fetch');
const cors = require('cors');

console.log("Loaded DB functions:", Object.keys(DB));

const port = process.argv.length > 2 ? process.argv[2] : 4000;


app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))


app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await DB.getUser(username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists.'});
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const token = uuid.v4();

  await DB.addUser({
    email: username,
    password: hashedPassword,
    token,
  });

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
  });
  res.json({ message: 'Registered successfully', username });
});


app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await DB.getUser(username);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const newToken = uuid.v4();
  user.token = newToken;
  await DB.updateUser(user);

  res.cookie('token', newToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
  });
  res.json({ message: 'Login successful', username });
});


app.delete('/api/auth/logout', async (req, res) => {
  const token = req.cookies.token;
  const user = await DB.getUserByToken(token);
  if (user) {
    delete user.token;
    await DB.updateUser(user);
  }
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
});


app.get('/api/secret', async (req, res) => {
  const token = req.cookies.token;
  const user = await DB.getUserByToken(token);
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json({ message: `Welcome, ${user.email}!` });
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

app.get('/api/events', async (req, res) =>  {
  try {
    const events = await DB.getAllEvents();
    res.json(events[0]?.data || {});
  } catch (err) {
    console.error('Error in GET /api/events:', err);
    res.status(500).send({ error: err.message });
  }
})

app.post('/api/events', async (req, res) => {
  console.log('inner');
  try {
    const events = req.body;
    await DB.saveEvents(events);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error in POST /api/events:', err);
    res.status(500).send({ error: err.message });
  }
});


app.get('/api/todos', async (req, res) =>  {
  try {
    const todos = await DB.getAllTodos();
    res.json(todos[0]?.data || {});
  } catch (err) {
    console.error('Error in GET /api/todos:', err);
    res.status(500).send({ error: err.message });
  }
})

app.post('/api/todos', async (req, res) => {
  try {
    const todos = req.body;
    await DB.saveTodos(todos);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error in POST /api/todos:', err);
    res.status(500).send({ error: err.message });
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});




const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});