// FloatingLabelInput.js
import React, { useState } from 'react';
import './FloatingLabelInput.css'; // Import the CSS for the component

function FloatingLabelInput({ label, value, onChange }) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <div className={`floating-label-input ${focused ? 'focused' : ''}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='Search'
      />
      <label>{label}</label>
    </div>
  );
}

export default FloatingLabelInput;
