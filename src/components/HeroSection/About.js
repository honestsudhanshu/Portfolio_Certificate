import React from "react";
import photo from './Images/img4.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import File from "./Sudhanshu_Resume.pdf"


import './About.css'


function ABOUT() {
    return (
        
            <div id="About" className="main-container" >
                <div className="para">
                    <div >
                        <h1>Hi , I'm  <br />  <span>Sudhanshu Kumar</span> <br />
                            Full Stack Web Developer </h1>
                    </div>
                    <div className="button">
                        <a href={File} download="Sudhanshu's_Resume">
                            <button type="button">Download Resume</button>
                        </a>
                    </div>


                    <div className="social">

                        <div className="handles">
                            <div className="handle linkdin">
                                <a href="https://www.linkedin.com/in/sudhanshukumar-/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                                </a>
                            </div>
                            <div className="handle Github">
                                <a href="https://github.com/honestsudhanshu" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="1.5x" />
                                </a>
                            </div>
                            <div className="handle Gmail">
                                <a href="mailto:sudhanshukumarhr808@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                                </a>
                            </div>
                            <div className="handle instagram">
                                <a href="https://www.instagram.com/sudhanshu_1124" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </a>
                            </div>

                        </div>
                    </div>



                </div>


                <div className="picture" >
                    <img src={photo} alt=" photo"  style={{"width":"505px"}} />
                </div>

            </div>
        
    )

}

export default ABOUT;