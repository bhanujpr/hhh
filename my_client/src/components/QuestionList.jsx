import React from 'react';
import QuestionCard from './QuestionCard/QuestionCard';
import ShortAnswerCard from './ShortAnswerCard/ShortAnswerCard';
import LongAnswerCard from './LongAnswerCard/LongAnswerCard';

const QuestionList = ({ questions }) => {
  if (!questions.length) return <p>No questions yet.</p>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {questions.map((q, index) => {
        if (q.type === 'MCQ') return <QuestionCard key={index} question={q} />;
        if (q.type === 'Short Answer') return <ShortAnswerCard key={index} question={q} />;
        if (q.type === 'Long Answer') return <LongAnswerCard key={index} question={q} />;
        return <div key={index}>Unknown question type</div>;
      })}
    </div>
  );
};

export default QuestionList;
