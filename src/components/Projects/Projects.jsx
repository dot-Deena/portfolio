import React from 'react';
import './Projects.css';  // Assuming you will create a separate CSS file for the Projects section

function Projects() {
  return (
    <div className="page-container projects">
      {/* Section below header */}
      <div className="main-content">
        {/* Left side (30%) */}
        <div className="left-side">
          <div className='project-list'>
              <h2>projects</h2>
              <a className="nes-btn btn-1" href="#">project1</a>
              <a className="nes-btn btn-2" href="#">project2</a>
              <a className="nes-btn btn-3" href="#">project3</a>
          </div>
        </div>

        {/* Right side (70%) */}
        <div className="right-side">
          <div className="bubble-speeches">
          <p class="nes-balloon from-left nes-pointer">
          <a href='https://github.com/dot-Deena/Sign-language' target="_blank">github link</a>
           something based no aiml</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;