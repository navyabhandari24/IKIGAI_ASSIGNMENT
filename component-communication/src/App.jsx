import React, { useState } from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';
import './static/styles.css';

function App() {
  const [message, setMessage] = useState('Initial Message');

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
<div className="container">
      <h1>Parent Component</h1>
      <div className={`component child-component-a`}>
        <ChildComponentA message={message} />
      </div>
      <div className={`component child-component-b`}>
        <ChildComponentB message={message} onMessageChange={handleMessageChange} />
      </div>
    </div>
  );
}

export default App;