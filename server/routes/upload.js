const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const generateQuestions = require('../services/generateQuestions');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    const { questionType, difficulty, customPrompt, numQuestions } = req.body;
    const pdfData = await pdfParse(req.file.buffer);
    const text = pdfData.text;

    const prompt = generateQuestions.buildPrompt({
      text,
      questionType,
      difficulty,
      customPrompt,
      numQuestions,
    });

    const mistralResponse = await generateQuestions.queryMistral(prompt);
    res.json({ questions: mistralResponse });
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: 'Failed to generate questions' });
  }
});

module.exports = router;
