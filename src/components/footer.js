import React from 'react';

import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>Feel free to connect with me!</h3>
                <hr className="sub"/>
                <p className="text-faded contact dark">Change is the essential process of all existence.</p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" target="_blank" rel="noopener noreferrer" href="https://github.com/Feora1343"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a className="" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1mSk0QjWkcTeeVTVRw4UFaNKNvny6QLwN9ofy13u7aBU/edit?usp=sharing"><i className="medium material-icons">description</i><br/>Resume</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rvorbeck/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>

                </div>

              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            <div className="center">Built with React.js, Material Design Icons, MaterializeCSS, Express.js, and Node.js</div> 
            </div>
          </div>
        </section>
    );
}