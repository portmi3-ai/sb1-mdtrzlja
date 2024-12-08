const path = require('path');
const { getProjectRoot } = require('../utils/paths');

function validateEnvironment() {
  const envPath = path.join(getProjectRoot(), '.env');
  
  const requiredEnvVars = [
    'SLACK_BOT_TOKEN',
    'SLACK_SIGNING_SECRET',
    'SLACK_APP_TOKEN',
    'OPENAI_API_KEY',
    'MONGODB_URI',
    'DB_NAME'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('Error: Missing required environment variables:');
    missingVars.forEach(varName => {
      console.error(`- ${varName}`);
    });
    console.error(`\nPlease set these variables in your .env file at: ${envPath}`);
    process.exit(1);
  }
}

module.exports = { validateEnvironment };