import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';

export default function Header(props){

    function handleclick(idNUm) {
        props.incCnt(idNUm);
    }

    const[num, setNum] = useState(0);

    function popupmenu() {
        let rotater = document.querySelector(".rotateicon");
        let cross = document.querySelector(".bar");
        let menu = document.querySelector(".menuitems");
        cross.classList.toggle("active");
        menu.classList.toggle("active");
        rotater.classList.toggle("active");
        setNum(num+1);
    }

    return(
        <div className='header'>
            <div className="logo">
                <b>Portfolio</b> 
                <i className="fas fa-code" id="itratee"></i>
            </div>
            <div className="menuitems">
                
                <Link to= '/home'>
                    <button className="btnn" onClick={() => handleclick(0)}>Home</button>
                </Link>
                <Link to= '/skills'>
                    <button className="btnn" onClick={() => handleclick(1)}>Skills</button>
                </Link>
                <Link to= '/about'>
                    <button className="btnn" onClick={() => handleclick(2)}>About</button>
                </Link>
                <Link to= '/myapp'>
                    <button className="btnn" onClick={() => handleclick(3)}>My App</button>
                </Link>
                
                <Link to= '/contact'>
                    <button className="btnn" onClick={() => handleclick(4)}>Contact</button>
                </Link>
               
            </div>
            <div className="bar" onClick={popupmenu}>
                <div className="rotateicon">
                    {num%2===0 ? <i  className="fas fa-bars"></i> : <i  className="fas fa-times"></i>}
                    
                </div>
                
            </div>
        </div>
    );
}