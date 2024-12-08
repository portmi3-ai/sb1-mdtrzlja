require('dotenv').config();
const path = require('path');
const { validateEnvironment } = require('./config/environment');
const { app } = require('./config/slack');
const { connectDB } = require('./config/mongodb');
const { registerHandlers } = require('./handlers');
const { getProjectRoot } = require('./utils/paths');

// Ensure we're in the correct directory
process.chdir(getProjectRoot());

// Validate environment variables before starting
validateEnvironment();

// Start the app
(async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Register all handlers
    registerHandlers(app);

    const port = process.env.PORT || 3000;
    await app.start(port);
    console.log(`⚡️ Government Contracting Assistant bot is running on port ${port}!`);
  } catch (error) {
    console.error('Error starting the bot:', error);
    process.exit(1);
  }
})();