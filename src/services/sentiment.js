const Sentiment = require('sentiment');
const sentiment = new Sentiment();

function analyzeSentiment(text) {
  return sentiment.analyze(text);
}

module.exports = { analyzeSentiment };