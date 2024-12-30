// src/components/Pokeball/Pokeball.jsx
import React, { useState } from 'react';
import './Pokeball.css';

function Pokeball() {
  const [showDialog, setShowDialog] = useState(false);
  const [randomFact, setRandomFact] = useState('');

  // Array of fun facts
  const funFacts = [
    "Kpop stans are EUGH!!",
    "I like donuts",
    "Math is nuh uh",
    "I had 3 chicken pets",
    "I prefer spicy food ",
    "My discord is usernaive",
    "I gag at tomatoes",
    "I like kanye, jaden & sza"
  ];
  // Function to generate a random fact
  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
  };

  const handleClick = () => {
    setRandomFact(getRandomFact()); // Set a random fun fact when Pokeball is clicked
    setShowDialog(true);  // Show dialog when Pokeball is clicked
  };

  const handleCloseDialog = () => {
    setShowDialog(false); // Close dialog when "OK" is clicked
  };

  return (
    <div>
      <i className="nes-pokeball floating-egg" onClick={handleClick}></i>

      {showDialog && (
        <dialog className="nes-dialog is-dark is-rounded pokeball" open>
          <form method="dialog">
            <p className="title">Fun Fact</p>
            <p className='randomfact'>{randomFact}</p>
            <menu className="dialog-menu">
              <button className="nes-btn" onClick={handleCloseDialog}>></button>
            </menu>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default Pokeball;