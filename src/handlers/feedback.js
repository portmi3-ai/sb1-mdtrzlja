const { analyzeSentiment } = require('../services/sentiment');
const { sanitizeInput } = require('../utils/validation');

function feedbackHandler(app) {
  app.message(/feedback/i, async ({ message, say }) => {
    const feedbackText = sanitizeInput(message.text.replace(/feedback/i, '').trim());
    const analysis = analyzeSentiment(feedbackText);

    if (analysis.score > 0) {
      await say("Thank you for your positive feedback! 😊");
    } else if (analysis.score < 0) {
      await say("I'm sorry to hear that you're not satisfied. Please tell me how I can improve. 😞");
    } else {
      await say("Thanks for your feedback! Let's keep the conversation going. 🤔");
    }
  });
}

module.exports = feedbackHandler;