import React from 'react';
import './Homepage.css';  

function Homepage() {
  return (
    <div className="homepage">
      {/* Section below header */}
      <div className="main-content">
        {/* Left side (30%) */}
        <div className="left-side">
          <div className="profile-picture">
            <img src="src/assets/pfp.jpeg" alt="Your Name" />
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-logos">
              <img src="src/assets/html.png" alt="HTML" />
              <img src="src/assets/css.png" alt="CSS" />
              <img src="src/assets/js.png" alt="JavaScript" />
              <img src="src/assets/react.png" alt="react" />
              <img src="src/assets/git.png" alt="git" />
              <img src="src/assets/github.png" alt="github" />
              <img src="src/assets/mongo.png" alt="mongo" />
              <img src="src/assets/python.png" alt="python" />
              <img src="src/assets/c.png" alt="c" />
              <img src="src/assets/npm.png" alt="npm" />
              <img src="src/assets/node.png" alt="node"/>
              {/* Add more logos here */}
            </div>
          </div>
        </div>

        {/* Right side (60%) */}
        <div className="right-side">
          <div className="intro">
            <h1>Hiii, I'm Deena!</h1>
            <p>Welcome to my portfolio. Take a look around.</p>
          </div>
          <div>
            <p>something here idk yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;