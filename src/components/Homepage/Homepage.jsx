import React, { useState } from 'react';
import './Homepage.css';  

function Homepage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to open the dialog
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="page-container homepage">
      {/* Section below header */}
      <div className="main-content">
        {/* Left side (30%) */}
        <div className="left-side">
          <div className="profile-picture">
            <img src="src/assets/pfp.jpeg" alt="Your Name" />
          </div>
          {/* Button to open the dialog */}
          <section>
            <button type="button" className="nes-btn is-warning" onClick={openDialog}>Skills</button>
            {/* Dialog Box */}
            {isDialogOpen && (
              <dialog className="nes-dialog" open>
                <form method="dialog">
                  <div className="skills-dialog">
                    <img src="src/assets/html.png" alt="HTML" />
                    <img src="src/assets/css.png" alt="CSS" />
                    <img src="src/assets/js.png" alt="JavaScript" />
                    <img src="src/assets/react.png" alt="React" />
                    <img src="src/assets/git.png" alt="Git" />
                    <img src="src/assets/github.png" alt="GitHub" />
                    <img src="src/assets/mongo.png" alt="MongoDB" />
                    <img src="src/assets/python.png" alt="Python" />
                    <img src="src/assets/c.png" alt="C" />
                    <img src="src/assets/npm.png" alt="NPM" />
                    <img src="src/assets/node.png" alt="Node.js" />
                    </div>
                  <menu className="dialog-menu">
                    <button className="nes-btn is-warning" onClick={closeDialog}>Close</button>
                  </menu>
                </form>
              </dialog>
            )}
          </section>
        </div>

        {/* Right side (60%) */}
        <div className="right-side">
          <div className="intro">
            <h1>Hiii, I'm Deena!</h1>
            <div className="nes-balloon from-left">
             <h4> Welcome to my portfolio! <br></br> Take a look around</h4>
             </div>
          </div> 
        </div>
        {/* right side ending */}
      </div>
      {/* main content ending */}
    </div>
    // homepage ending
  );
}

export default Homepage;