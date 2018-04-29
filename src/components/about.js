import React from 'react';

import about from '../assets/images/about/creative.png';
import primeLogo from '../assets/images/about/prime_logo.png';
import geeksquadLogo from '../assets/images/about/geeksquad_logo.png';
import bullhornLogo from '../assets/images/about/bullhorn_logo.png';
import nerderyLogo from '../assets/images/about/nerdery_logo.png';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Growing up building computers, I've always had a passion for building and creating things. When I graduated with a Full Stack Software Engineering certificate from Prime, it was both an accomplishment and a dream. Now that I've graduated I want to take my passion, education, and experience to develop websites and applications.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Inside you is the potential to make yourself better... and that is what it is to be human. To make yourself more than you are."</em></div>
            <p className='text-faded'>My approach to UX/UI design and software development is to balance form and function. I think a design should be intuitive, visually balanced, and it allows the content to shine. Designs that create a great user experience are significant because they cause people to buy products from the same company over and over again. Additionally, implementing designs with code efficiency in mind will enhance performance, scalability, and overall product quality. With this approach, there is no limit on what can be achieved.</p>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m3">
                <img src={geeksquadLogo} alt="Geek Squad" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Joining Geek Squad as my first career back in 2008, I quickly went from a repair agent to a <em>Geek Squad Manager </em>creating a successful career blending Information technology and sales that laid a strong foudnation for my professional career and skills.
            </div>
            </div>
            <div className="col s12 m3">
                <img src={bullhornLogo} alt="Bullhorn" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Looking to work closer with software and software development, I joined Bullhorn as a <em>Technical Support Supervisor </em>. I would use my business analytic skills to set new KPI targets as well as create new KPI metrics for the support organization to track.
            </div>
            </div>
            <div className="col s12 m3">
            <img src={nerderyLogo} alt="Nerdery" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Continuing my career progression to work with software development, I joined The Nerdery as a pre-sales business analyst called a<strong> Solutions Engineer </strong>. Now I just wasn't working for a software company, I was working with software developers to build estimates, proposals, and scope documents for clients.
            </div>
            </div>
            <div className="col s12 m3">
            <img src={primeLogo} alt="Prime" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Earning my certificatee in <strong>Full Stack Software Engineering</strong> from Prime while in their <em>Full Immersion Full Stack Engineering Program</em> allowed me to combine my past work experiences in Information Technology and Software Development to create a wholistic approach to building web applications.
            </div>
            </div>
            </div>
            
        </div>
        </section>
    );
}