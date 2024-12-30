// src/components/ViewCounter/ViewCounter.jsx
import React, { useState, useEffect } from 'react';
import './ViewCounter.css';

function ViewCounter() {
  const [viewCount, setViewCount] = useState(0);

  // Load the view count from localStorage when the component mounts
  useEffect(() => {
    const storedViewCount = localStorage.getItem('viewCount');
    if (storedViewCount) {
      setViewCount(parseInt(storedViewCount, 10));
    }
  }, []);

  // Increment the view count and save it to localStorage
  useEffect(() => {
    if (viewCount > 0) {
      localStorage.setItem('viewCount', viewCount);
    }
  }, [viewCount]);

  // Increment view count each time the component is mounted
  useEffect(() => {
    setViewCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div className="view-count-container">
      <div className="view-count">{viewCount}</div> {/* View count displayed over the badge */}
     </div>
  );
}

export default ViewCounter;