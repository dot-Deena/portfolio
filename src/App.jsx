// src/App.js
import React, { useState } from 'react';
import 'nes.css/css/nes.min.css';
import './App.css';
import Homepage from './components/Homepage/Homepage.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Time from './components/Time/Time.jsx';

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
        <Time/>
        <div className="buttons">
          <button className="nes-btn is-primary" onClick={() => setActiveComponent('home')}>Home</button>
          <button className="nes-btn is-success" onClick={() => setActiveComponent('projects')}>Projects</button>
          <button className="nes-btn is-error" onClick={() => setActiveComponent('contact')}>Contact</button>
        </div>
      </header>

      <footer className="app-footer">
        <p>© 2024 Your Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/dot-Deena" target="_blank" rel="noopener noreferrer">
          <i class="nes-icon github is-medium"></i></a>
          <a href="https://www.instagram.com/icvntt" target="_blank" rel="noopener noreferrer">
          <i class="nes-icon instagram is-medium"></i></a>
          <a href="https://www.linkedin.com/in/deena-sreshta/" target="_blank" rel="noopener noreferrer">
          <i class="nes-icon linkedin is-medium"></i></a>
          <a href="intideenasreshta@gmail.com" target="_blank" rel="noopener noreferrer">
          <i class="nes-icon gmail is-medium"></i></a>
          <a href="https://www.reddit.com/user/_xCHERRYBLUESx/" target="_blank" rel="noopener noreferrer">
          <i class="nes-icon reddit is-medium"></i></a>
        </div>
      </footer>

      {/* Render the active component */}
      {renderComponent()}
    </div>
  );
}

export default App;