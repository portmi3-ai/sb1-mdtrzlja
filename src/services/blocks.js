function getHomeBlocks() {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Welcome to the Government Contracting Assistant!* 🏢"
      }
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Available Services:*"
      }
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Write Proposal",
            emoji: true
          },
          value: "write_proposal",
          action_id: "write_proposal_btn"
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Bid Checklist",
            emoji: true
          },
          value: "bid_checklist",
          action_id: "bid_checklist_btn"
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Search Contracts",
            emoji: true
          },
          value: "search_contracts",
          action_id: "search_contracts_btn"
        }
      ]
    }
  ];
}

function getProposalBlocks(data = {}) {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Proposal Details*"
      }
    },
    {
      type: "input",
      block_id: "proposal_title",
      element: {
        type: "plain_text_input",
        action_id: "title_input",
        placeholder: {
          type: "plain_text",
          text: "Enter proposal title"
        }
      },
      label: {
        type: "plain_text",
        text: "Title"
      }
    },
    {
      type: "input",
      block_id: "proposal_objective",
      element: {
        type: "plain_text_input",
        action_id: "objective_input",
        multiline: true,
        placeholder: {
          type: "plain_text",
          text: "Enter proposal objective"
        }
      },
      label: {
        type: "plain_text",
        text: "Objective"
      }
    },
    {
      type: "input",
      block_id: "proposal_budget",
      element: {
        type: "plain_text_input",
        action_id: "budget_input",
        placeholder: {
          type: "plain_text",
          text: "Enter budget amount"
        }
      },
      label: {
        type: "plain_text",
        text: "Budget"
      }
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Submit",
            emoji: true
          },
          value: "submit_proposal",
          action_id: "submit_proposal_btn",
          style: "primary"
        }
      ]
    }
  ];
}

module.exports = {
  getHomeBlocks,
  getProposalBlocks
};