import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import QuestionList from './components/QuestionList';

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>📘 AI-Based PDF Question Generator</h2>

      <UploadForm setQuestions={setQuestions} loading={loading} setLoading={setLoading} />

      <hr style={{ margin: '2rem 0' }} />
      <h3>📝 Generated Questions:</h3>
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
