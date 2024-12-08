const { getHomeBlocks } = require('../services/blocks');

function homeHandler(app) {
  app.message(/home/i, async ({ message, say }) => {
    await say({
      blocks: getHomeBlocks()
    });
  });

  app.action('write_proposal_btn', async ({ ack, body, client }) => {
    await ack();
    await client.views.open({
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        title: {
          type: "plain_text",
          text: "Write Proposal"
        },
        blocks: getProposalBlocks(),
        submit: {
          type: "plain_text",
          text: "Submit"
        }
      }
    });
  });

  app.action('bid_checklist_btn', async ({ ack, say }) => {
    await ack();
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Bid Submission Checklist:*\n\n" +
                  "✅ 1. Ensure all requirements are met\n" +
                  "📝 2. Prepare the proposal cover letter\n" +
                  "📋 3. Complete all forms and certifications\n" +
                  "💰 4. Submit detailed cost estimates\n" +
                  "🔍 5. Review compliance with the RFP"
          }
        }
      ]
    });
  });

  app.action('search_contracts_btn', async ({ ack, body, client }) => {
    await ack();
    await client.views.open({
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        title: {
          type: "plain_text",
          text: "Search Contracts"
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Select contract type:*"
            }
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Federal Contracts",
                  emoji: true
                },
                value: "federal",
                action_id: "search_federal"
              },
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "State/Local Contracts",
                  emoji: true
                },
                value: "state_local",
                action_id: "search_state_local"
              }
            ]
          }
        ]
      }
    });
  });
}

module.exports = homeHandler;