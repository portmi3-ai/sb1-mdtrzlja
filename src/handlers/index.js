const homeHandler = require('./home');
const proposalHandler = require('./proposal');
const bidHandler = require('./bid');
const searchHandler = require('./search');
const feedbackHandler = require('./feedback');

function registerHandlers(app) {
  homeHandler(app);
  proposalHandler(app);
  bidHandler(app);
  searchHandler(app);
  feedbackHandler(app);
}

module.exports = { registerHandlers };