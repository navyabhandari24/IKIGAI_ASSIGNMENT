import React from 'react';

const ChildComponentB = ({ onMessageChange }) => {
  return (
    <div className="child-component">
      <h2>Child Component B</h2>
      <button onClick={() => onMessageChange('New Message from B')}>Change Message</button>
    </div>
  );
};

export default ChildComponentB;