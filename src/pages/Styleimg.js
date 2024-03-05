// StyleSelection.js
import React, { useState } from 'react';
import './selection.css'; // Make sure to create a selection.css file for styles

const StyleSelection = ({ onGenerate }) => {
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleStyleChange = (event) => {
    setSelectedStyle(event.target.value);
  };

  const styles = [
    'Epic',
    'Sunset',
    'Studio Shot',
    'Indoor',
    'Outdoor',
    'Water Action',
    'Vintage',
    'Motion Blur',
    'Blurred Background'
    // Add more styles as needed
  ];

  return (
    <div className="style-selection-container">
      <div className="style-selection-card">
        <h2>Please select a style for your image:</h2>
        <select 
          className="style-dropdown" 
          value={selectedStyle} 
          onChange={handleStyleChange}
        >
          <option value="">Select a style</option>
          {styles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
        <button className="generate-btn btn-lg" onClick={() => onGenerate(selectedStyle)}>
          Generate Now!
        </button>
      </div>
    </div>
  );
};

export default StyleSelection;
