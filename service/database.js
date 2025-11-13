const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const eventCollection = db.collection('events');
const todoCollection = db.collection('todo');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

async function getAllEvents() {
    return eventCollection.find({}).toArray();
}

async function saveEvents(events) {
    await eventCollection.deleteMany({});
    return eventCollection.insertOne({ data: events });
}

async function getAllTodos() {
    return todoCollection.find({}).toArray();
}

async function saveTodos(todos) {
    await todoCollection.deleteMany({});
    return todoCollection.insertOne({data: todos});
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}




module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  getAllEvents,
  saveEvents,
  getAllTodos,
  saveTodos,
};
