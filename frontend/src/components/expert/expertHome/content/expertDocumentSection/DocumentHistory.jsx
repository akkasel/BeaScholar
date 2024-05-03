import React from 'react';
import DocumentHistoryHeader from './DocumentHistoryHeader';
import DocumentList from './DocumentList';

const DocumentHistory = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #FF6C37',
    borderRadius: '16px',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <DocumentHistoryHeader />
      <DocumentList />
    </div>
  );
};

export default DocumentHistory;