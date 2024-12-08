// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const { App } = require('@slack/bolt');  
const axios = require('axios');  
const LRU = require('lru-cache');  
const glob = require('glob');  

// Initialize the Slack Bolt App  
const app = new App({  
  token: process.env.SLACK_BOT_TOKEN,  
  signingSecret: process.env.SLACK_SIGNING_SECRET,  
});  

// Set up an LRU Cache  
const options = {  
  max: 500, // Maximum size of cache  
  maxAge: 1000 * 60 * 60 // 1 hour  
};  
const cache = new LRU(options);  

// Function to cache data  
const cacheExample = (key, value) => {  
  cache.set(key, value);  
  console.log(`Cached item: ${key} - ${value}`);  
};  

// Using glob to find files  
glob("**/*.js", (err, files) => {  
  if (err) {  
    console.error("Error fetching files: ", err);  
    return;  
  }  
  console.log("JavaScript files found:", files);  
  
  // Example of caching file info  
  files.forEach(file => {  
    cacheExample(file, `Info about ${file}`);  
  });  
});  

// Sample endpoint to handle requests  
app.command('/your-command', async ({ command, ack, say }) => {  
  await ack();  
  
  const response = await axios.get('https://api.example.com/data');  
  cacheExample('exampleKey', response.data);  
  
  await say(`Here's the data: ${response.data}`);  
});  

// Start your app  
(async () => {  
  await app.start(process.env.PORT || 3000);  
  console.log('⚡️ Slack Bolt app is running!');  
})();