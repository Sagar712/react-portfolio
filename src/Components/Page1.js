import React from 'react';
import './Page1.css';
import pict_sagar from '../images/selfie.jpeg';
import resume from '../images/Sagar Wankhade CV.pdf';

export default function Page1(){
    return(
        <div className="page1">   
            <div className="cotent1">
                <span style={{fontSize: "1.3rem"}}><span style={{color: "rgb(255, 231, 94)"}}>Namaste</span>, myself</span>
                <br/>
                <span style={{fontSize: "2.5rem",fontWeight: "bold"}}>Sagar Wankhade</span>
                <br/>
                <span style={{fontSize: "1.5rem"}}>and I am a<span id="animm" style={{fontWeight: "bold"}}> Developer <i  className="fas fa-code"></i> </span></span>
                <br/>
                <a href={resume} download>
                    <button id="resume">Resume <i  className="fas fa-download"></i></button>
                </a>
                
            </div>
            
            <img src={pict_sagar} className="pic1" alt="sagar pic"/>
        </div>

    );
}