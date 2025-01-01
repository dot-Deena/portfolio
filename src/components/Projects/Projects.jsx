import React, { useState } from 'react';
import './Projects.css'; // Assuming you have a CSS file for styling

function Projects() {
  const [openProject, setOpenProject] = useState(null); // Track which project is open

  const handleOpen = (project) => {
    setOpenProject(project); // Set the currently open project
  };

  const handleClose = () => {
    setOpenProject(null); // Close the currently open project
  };

  return (
    <div className="page-container projects">
      {/* Section below header */}
      <div className="main-content">
        {/* Left side (30%) */}
        <div className="left-side">
          <div className="project-list">
            <h2>Projects</h2>
           
            {/* Project 1 */}
            <section className='project-container'>
              <button type="button" className="nes-btn btn-1" onClick={() => handleOpen('project1')} >  Project 1</button>
              {openProject === 'project1' && (
                <div className="project-balloon">
                  <p className="nes-balloon">
                    <a href="https://github.com/dot-Deena/Sign-language" target="_blank" rel="noopener noreferrer"> GitHub Link</a>
                    <br />
                    Something based on AI/ML
                  </p>
                  <menu className="close-button">
                    <button className="nes-btn is-warning" onClick={handleClose} >Close </button>
                  </menu>
                </div>
              )}
            </section>

            {/* Project 2 */}
            <section>
              <button type="button" className="nes-btn btn-3" onClick={() => handleOpen('project2')} > Project 2 </button>
              {openProject === 'project2' && (
                <div className="project-1">
                  <p className="nes-balloon from-left nes-pointer">
                    <a href="https://github.com/dot-Deena/Another-Project"target="_blank"rel="noopener noreferrer">GitHub Link</a>
                    <br />
                    Another AI/ML Project
                  </p>
                  <menu className="close-button">
                    <button className="nes-btn is-warning" onClick={handleClose} > Close </button>
                  </menu>
                </div>
              )}
            </section>

            {/* Project 3 */}
            <section>
              <button type="button" className="nes-btn btn-3" onClick={() => handleOpen('project3')}  > Project 3 </button>
              {openProject === 'project3' && (
                <div className="project-1">
                  <p className="nes-balloon nes-pointer">
                    <a href="https://github.com/dot-Deena/Third-Project" target="_blank" rel="noopener noreferrer"> GitHub Link</a>
                    <br />
                    Yet Another AI/ML Project
                  </p>
                  <menu className="close-button">
                    <button className="nes-btn is-warning" onClick={handleClose} > Close </button>
                  </menu>

                </div>
              )}
              <div className='under-construction'>
            <img src="src/assets/gif.gif" alt="gof" />
            </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;