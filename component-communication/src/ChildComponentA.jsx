import React from 'react';

const ChildComponentA = ({ message }) => {
  return (
    <div className="child-component">
      <h2>Child Component A</h2>
      <p>{message}</p>
    </div>
  );
};

export default ChildComponentA;