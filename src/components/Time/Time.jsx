import React, { useState, useEffect } from 'react';
import "./Time.css";

function GreetingAndTime() {
  const [greeting, setGreeting] = useState('');
  const [time, setTime] = useState('');

  const updateGreetingAndTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let greeting = '';
    if (hours < 12) {
      greeting = 'Good Morning';
    } else if (hours < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }

    setGreeting(greeting);
    setTime(timeString);
  };

  useEffect(() => {
    updateGreetingAndTime();
    const interval = setInterval(updateGreetingAndTime, 60000); // Update every minute
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="greeting-time">
      <div id="greeting">{greeting}!</div>
      <div id="time">{time}</div>
    </div>
  );
}

export default GreetingAndTime;