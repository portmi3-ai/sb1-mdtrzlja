const axios = require('axios');

async function getAIResponse(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return 'Sorry, I am unable to provide a response at the moment.';
  }
}

module.exports = { getAIResponse };