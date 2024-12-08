function searchHandler(app) {
  app.message(/search contracts/i, async ({ message, say }) => {
    await say("Are you looking for federal or state/local contracts? Please specify.");
  });

  app.message(/federal contracts/i, async ({ message, say }) => {
    await say("Please provide keywords or specific criteria for the federal contracts you wish to search.");
  });

  app.message(/state local contracts/i, async ({ message, say }) => {
    await say("Please provide your criteria or keywords for the state and local contracts you want to search.");
  });
}

module.exports = searchHandler;