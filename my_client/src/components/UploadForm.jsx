import React, { useState } from 'react';
import { uploadPDF } from '../api/api';

const UploadForm = ({ setQuestions, loading, setLoading }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [questionType, setQuestionType] = useState('MCQ');
  const [difficulty, setDifficulty] = useState('Easy');
  const [customPrompt, setCustomPrompt] = useState('');
  const [numQuestions, setNumQuestions] = useState(3);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pdfFile) return alert('Please upload a PDF.');

    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('questionType', questionType);
    formData.append('difficulty', difficulty);
    formData.append('customPrompt', customPrompt);
    formData.append('numQuestions', numQuestions);

    setLoading(true);
    try {
      const data = await uploadPDF(formData);
      setQuestions(data.questions);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#f4f4f4', padding: '1.5rem', borderRadius: 8 }}>
      <label><strong>Upload PDF:</strong></label>
      <input type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files[0])} />
      <br /><br />

      <label><strong>Number of Questions:</strong></label>
      <input
        type="number"
        min="1"
        max="20"
        value={numQuestions}
        onChange={(e) => setNumQuestions(e.target.value)}
        style={{ width: '60px', marginLeft: '10px' }}
      />
      <br /><br />

      <label><strong>Question Type:</strong></label>
      <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
        <option value="MCQ">MCQ</option>
        <option value="Short Answer">Short Answer</option>
        <option value="Long Answer">Long Answer</option>
      </select>
      <br /><br />

      <label><strong>Difficulty:</strong></label>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <br /><br />

      <label><strong>Custom Prompt (optional):</strong></label><br />
      <textarea
        rows="4"
        cols="60"
        placeholder="Write your custom prompt here..."
        value={customPrompt}
        onChange={(e) => setCustomPrompt(e.target.value)}
        style={{ resize: 'vertical' }}
      />
      <br /><br />

      <button
        type="submit"
        disabled={loading}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {loading ? 'Generating...' : 'Generate Questions'}
      </button>
    </form>
  );
};

export default UploadForm;
