// src/App.js
import React, { useState } from 'react';
import 'nes.css/css/nes.min.css';
import './App.css';
import Homepage from './components/Homepage/Homepage.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');  // State to track which component is active

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Homepage />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="App">
      {/* Header with pink background */}
      <header className="app-header">
        <div className="buttons">
          <button className="nes-btn is-primary" onClick={() => setActiveComponent('home')}>Home</button>
          <button className="nes-btn is-success" onClick={() => setActiveComponent('projects')}>Projects</button>
          <button className="nes-btn is-error" onClick={() => setActiveComponent('contact')}>Contact</button>
        </div>
      </header>

      {/* Render the active component */}
      {renderComponent()}
    </div>
  );
}

export default App;