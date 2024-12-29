import React from 'react';
import './Projects.css';  // Assuming you will create a separate CSS file for the Projects section

function Projects() {
  return (
    <div className="projects">
      {/* Section below header */}
      <div className="main-content">
        {/* Left side (30%) */}
        <div className="left-side">
          <div className='project-list'>
              <h2>projects</h2>
              <a class="nes-btn btn-1" href="#">projwwct1</a>
              <a class="nes-btn btn-2" href="#">project2</a>
              <a class="nes-btn btn-3" href="#">proejct 3</a>
          </div>
        </div>

        {/* Right side (70%) */}
        <div className="right-side">
          
        </div>
      </div>
    </div>
  );
}

export default Projects;