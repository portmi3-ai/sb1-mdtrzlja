const { MongoClient } = require('mongodb');
const { getProjectRoot } = require('../utils/paths');

let client;

async function connectDB() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    client = new MongoClient(mongoUri);
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(process.env.DB_NAME || 'gov_contracting_assistant');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

function getDB() {
  if (!client) {
    throw new Error('Database connection not initialized');
  }
  return client.db(process.env.DB_NAME || 'gov_contracting_assistant');
}

module.exports = { connectDB, getDB };