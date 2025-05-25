const axios = require('axios');

function buildPrompt({ text, questionType, difficulty, customPrompt, numQuestions }) {
  const trimmedText = text.slice(0, 1500);
  const n = parseInt(numQuestions) || 3;

  if (customPrompt && customPrompt.trim()) {
    return `${customPrompt}\n\nText:\n"""${trimmedText}"""`;
  }

  const baseInstructions = {
    MCQ: `
Generate ${n} MCQ questions from the text.
Format:
[
  {
    "type": "MCQ",
    "question": "Question text",
    "options": ["A", "B", "C", "D"],
    "answer": "Correct option"
  }
]
Respond ONLY in JSON. No explanations or markdown.
    `,
    'Short Answer': `
Generate ${n} Short Answer questions.
Format:
[
  {
    "type": "Short Answer",
    "question": "What is ...?",
    "answer": "..."
  }
]
Respond ONLY in JSON. No explanations or markdown.
    `,
    'Long Answer': `
Generate ${n} Long Answer questions.
Format:
[
  {
    "type": "Long Answer",
    "question": "Explain ...",
    "answer": "Long detailed answer."
  }
]
Respond ONLY in JSON. No explanations or markdown.
    `,
  };

  return `${baseInstructions[questionType]}\n\nText:\n"""${trimmedText}"""`;
}

async function queryMistral(prompt) {
  const response = await axios.post(
    'https://api.mistral.ai/v1/chat/completions',
    {
      model: 'mistral-medium',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const raw = response.data.choices[0].message.content.trim();
  const cleaned = raw
    .replace(/^```json/, '')
    .replace(/^```/, '')
    .replace(/```$/, '')
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.error('⚠️ Failed to parse Mistral response:', raw);
    throw new Error('Invalid JSON from Mistral');
  }
}

module.exports = { buildPrompt, queryMistral };
