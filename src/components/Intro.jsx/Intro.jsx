import React, { useState, useEffect } from "react";
import "./Intro.css";

const Intro = ({ onFinish }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setLoading(true);
    setProgress(0); // Reset progress to 0 when starting

    // Simulate the progress bar looping from 0 to 100
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
          onFinish(); // Call onFinish when loading is done
          return 100;
        }
        return prevProgress + 10; // Increase progress by 10 each time
      });
    }, 300); // Update every 500ms (you can adjust this for faster/slower)
  };

  return (
    <div className="intro-container">
      <div className="wrapper">
        <h1 className="neon-text rotating-text" data-text="Enter">Enter</h1>
        {!loading && (
          <button className="nes-btn is-warning" onClick={handleClick}>
            Yes
          </button>
        )}
        {loading && (
          <progress
            className="nes-progress is-pattern"
            value={progress}
            max="100"
          ></progress>
        )}
      </div>
    </div>
  );
};

export default Intro;