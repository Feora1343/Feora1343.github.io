import React from 'react';

import htmlLogo from '../assets/images/skills/html_logo.png';
import cssLogo from '../assets/images/skills/css_logo.png';
import oopLogo from '../assets/images/skills/oop.png';
import jsLogo from '../assets/images/skills/javascript_logo.png';

import jqueryLogo from '../assets/images/skills/jquery_logo.png';
import angularjsLogo from '../assets/images/skills/angularjs_logo.png'
import reactLogo from '../assets/images/skills/react-logo.png';
import reduxLogo from '../assets/images/skills/redux.png';

import apiLogo from '../assets/images/skills/api.png';
import restLogo from '../assets/images/skills/rest.png';
import ajaxLogo from '../assets/images/skills/ajax_logo.png'
import axiosLogo from '../assets/images/skills/axios.png'

import nodeLogo from '../assets/images/skills/node.png';
import postgresqlLogo from '../assets/images/skills/postgresql_logo.png';
import mongodbLogo from '../assets/images/skills/mongodb_logo.png';
import responsiveDesign from '../assets/images/skills/responsive-design.png';

import bootstrapLogo from '../assets/images/skills/bootstrap_logo.png';
import angularmaterialLogo from '../assets/images/skills/angularmaterial_logo.png';
import materialiconsLogo from '../assets/images/skills/materialicons_logo.png';
import materializeLogo from '../assets/images/skills/materialize_logo.png';

import gitLogo from '../assets/images/skills/git_logo.png';
import agileLogo from '../assets/images/skills/agile_logo.png';
import vscodeLogo from '../assets/images/skills/vscode_logo.png';
import adobeLogo from  '../assets/images/skills/adobe_logo.png';

export default props =>{

    return(
        <section id='skills'>
            <h3>Technical Skills</h3>
            <hr/>
            <div className="container">
                <div className="row">
                <div className="col s12 l6 skills">

                    <img className="col s3 htmlLogo" src={htmlLogo} alt="HTML"/>
                    <img className="col s3 cssLogo"  src={cssLogo} alt="CSS"/>
                    <img className="col s3 oopLogo" src={oopLogo} alt='OOP'/>
                    <img className="col s3 jsLogo" src={jsLogo} alt="Javascript"/>

                </div>
                
                <div className="col s12 l6 skills">

                    
                    <img className="col s3 jqueryLogo" src={jqueryLogo} alt='JQuery'/>
                    <img className="col s3 angularjsLogo" src={angularjsLogo} alt='AngularJS'/>
                    <img className='col s3 reactLogo' src={reactLogo} alt='React'/>
                    <img className='col s3 reduxLogo' src={reduxLogo} alt='Redux'/>

                </div>

                </div>

                <div className="row">
                <div className="col s12 l6 skills">

                    <img className="col s3 apiLogo" src={apiLogo} alt='API'/>
                    <img className="col s3 restLogo" src={restLogo} alt='REST'/>
                    <img className="col s3 ajaxLogo" src={ajaxLogo} alt='Ajax'/>
                    <img className="col s3 axiosLogo" src={axiosLogo} alt='Axios'/>

                </div>
                
                <div className="col s12 l6 skills">

                    <img className='col s3 nodeLogo' src={nodeLogo} alt="Node"/>
                    <img className='col s3 postgresqlLogo' src={postgresqlLogo} alt='PostgreSQL'/>
                    <img className='col s3 mongodbLogo' src={mongodbLogo} alt='MongoDB'/>
                    <img className='col s3 responsiveLogo' src={responsiveDesign} alt='Responsive Design'/>
                    
                </div>
                
                </div>

                <div className="row">
                <div className="col s12 l6 skills">

                    <img className='col s3 bootstrapLogo'  src={bootstrapLogo} alt="Bootstrap"/>
                    <img className='col s3 angularmaterialLogo'  src={angularmaterialLogo} alt="Angular Material"/>
                    <img className='col s3 materialiconsLogo'  src={materialiconsLogo} alt="Material Icons"/>
                    <img className='col s3 materializeLogo'  src={materializeLogo} alt="Materialize"/>

                </div>
                
                <div className="col s12 l6 skills">

                    <img className='col s3 gitLogo' src={gitLogo} alt='Git'/>
                    <img className='col s3 agileLogo' src={agileLogo} alt='Agile'/>
                    <img className='col s3 vscodeLogo' src={vscodeLogo} alt='VS Code'/>
                    <img className='col s3 adobeLogo' src={adobeLogo} alt='Adobe Photoshop and XD'/>

                </div>
                
                </div>

            </div>
        </section>
    );
}