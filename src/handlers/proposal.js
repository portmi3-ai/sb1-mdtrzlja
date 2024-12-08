const SessionManager = require('../services/session');
const { formatCurrency } = require('../utils/formatting');
const { isValidBudget, sanitizeInput } = require('../utils/validation');

function proposalHandler(app) {
  app.message(/write proposal/i, async ({ message, say }) => {
    await say("Let's start writing your proposal! What is the title of your proposal?");
    SessionManager.create(message.user, { stage: 'title' });
  });

  app.message(/title: (.+)/i, async ({ message, say }) => {
    const session = SessionManager.get(message.user);
    if (!session) return;

    const title = sanitizeInput(message.text.match(/title: (.+)/i)[1]);
    SessionManager.update(message.user, { title, stage: 'objective' });
    await say(`Great! Now, please provide the objective of your proposal.`);
  });

  app.message(/objective: (.+)/i, async ({ message, say }) => {
    const session = SessionManager.get(message.user);
    if (!session || session.stage !== 'objective') return;

    const objective = sanitizeInput(message.text.match(/objective: (.+)/i)[1]);
    SessionManager.update(message.user, { objective, stage: 'budget' });
    await say(`Awesome! Now, please provide the budget estimate for your proposal.`);
  });

  app.message(/budget: (.+)/i, async ({ message, say }) => {
    const session = SessionManager.get(message.user);
    if (!session || session.stage !== 'budget') return;

    const budgetInput = message.text.match(/budget: (.+)/i)[1];
    if (!isValidBudget(budgetInput)) {
      await say("Please provide a valid budget amount (e.g., $10000 or 10000)");
      return;
    }

    const budget = formatCurrency(parseFloat(budgetInput.replace(/[^0-9.-]+/g, '')));
    const { title, objective } = session;
    
    await say(`Here's your proposal draft:\n*Title:* ${title}\n*Objective:* ${objective}\n*Budget:* ${budget}\nWould you like to make any changes or finalize it?`);
    SessionManager.delete(message.user);
  });
}

module.exports = proposalHandler;