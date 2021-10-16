import React from 'react';
import "./Page3.css";
import sag_pic from "../images/mypic.jpg";

export default function Page3() {



    return (
        <div className="page3" >
            <div className="content3">
                <img src={sag_pic} className="pic2" alt="mypic.jpg"/>
                <div className="titles">
                    <span style={{fontSize: "1.7rem", fontWeight: "bold", color: "rgb(201, 0, 67)"}}>About me<br/><hr/></span> 
                    <br/>
            
                    <p className="allInform">
                        Myself Sagar Vilas Wankhade. I am a Freelancer and Developer with experience of 2 years in MNC (Accenture). 
                        I am familiar with various methodologies like Agile, Waterfall, Incremental etc.
                        I have implemented complete devops cycle with jenkins, java, node.js. 
                        I have also worked on frontend and backend in same company.
                    </p> 
                    <br/>
                    </div>
            </div>
        </div>
        
    )
}
