import React from 'react';
import InterviewHistoryHeader from './InterviewHistoryHeader';
import InterviewList from './InterviewList';

const InterviewHistory = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #CA3C4F',
    borderRadius: '16px',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <InterviewHistoryHeader />
      <InterviewList />
    </div>
  );
};

export default InterviewHistory;
