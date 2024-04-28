import React from 'react';
import DocumentCard from './DocumentCard';

const DocumentList = () => {
  const documents = [
    { date: '28 Feb', time: '09.00' },
    { date: '28 Feb', time: '13.00' },
    // ... add more documents here
  ];

  const listStyle = {
    margin: '20px',
  };

  return (
    <div style={listStyle}>
      {documents.map((document, index) => (
        <DocumentCard key={index} date={document.date} time={document.time} />
      ))}
    </div>
  );
};

export default DocumentList;