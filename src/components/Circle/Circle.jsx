import React from 'react';

const Circle = ({ rating }) => {
  const circleStyle = {
    width: '150px', // Adjust the size of the circle as needed
    height: '150px',
    border: '8px solid #ccc', // Outer circle color
    borderRadius: '50%', // Make it a circle
    position: 'relative',
  };

  const ratingColor = `rgba(68, 199, 103, ${rating / 10})`; // Calculate the green color based on the rating

  const fillStyle = {
    width: '100%',
    height: '100%',
    border: '8px solid transparent',
    borderRadius: '50%',
    background: ratingColor, // Use the calculated green color
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white', // Text color
    fontSize: '3rem', // Adjust the font size as needed
    fontWeight: 'bolder', // Make the text bold
  };

  return (
    <div style={circleStyle}>
      <div style={fillStyle}></div>
      <div style={textStyle}>{rating}</div>
    </div>
  );
};

export default Circle;