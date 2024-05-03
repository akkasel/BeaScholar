import React from 'react';

const DocumentCard = ({ date, time }) => {
  const cardStyle = {
    border: '2px solid #FF6C37',
    borderRadius: '16px',
    padding: '15px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // white background
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // soft shadow
    position: 'relative', // to position the circle
  };

  const circleStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#FF6C37',
    position: 'absolute',
    right: '20px',
    top: '-20px', // half outside the card
  };

  const dateStyle = {
    fontWeight: 'bold',
    color: '#333333', // dark text color
  };

  const timeStyle = {
    color: '#666666', // lighter text color
  };

  const feedbackLinkStyle = {
    textDecoration: 'none',
    color: '#727272',
    fontWeight: 'bold',
  };

  return (
    <div style={cardStyle}>
      <div>
        <div style={dateStyle}>Hasil Analisis Essay 01</div>
        <div style={timeStyle}>Essay</div>
      </div>
      <div>
        <div style={dateStyle}>{date}</div>
        <div style={timeStyle}>{time}</div>
      </div>
      <div style={circleStyle} />
      <a href="#" style={feedbackLinkStyle}>Lihat feedback →</a>
    </div>
  );
};

export default DocumentCard;
