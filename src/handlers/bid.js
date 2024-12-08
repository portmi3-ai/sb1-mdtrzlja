function bidHandler(app) {
  app.message(/bid checklist/i, async ({ message, say }) => {
    await say("Here's a bid submission checklist:\n" +
              "1. Ensure all requirements are met.\n" +
              "2. Prepare the proposal cover letter.\n" +
              "3. Complete all forms and certifications.\n" +
              "4. Submit detailed cost estimates.\n" +
              "5. Review compliance with the RFP.");
  });

  app.message(/compliance matrix/i, async ({ message, say }) => {
    await say("Please provide your proposal details, and I can help you create a compliance matrix for it. Include sections of the RFP you need to comply with.");
  });

  app.message(/bid no bid/i, async ({ message, say }) => {
    await say("Please provide your analysis of the contract requirements and risks. I can help you make a bid/no bid decision.");
  });
}

module.exports = bidHandler;