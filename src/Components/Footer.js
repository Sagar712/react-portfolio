import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerline1">
                <div className="footerline1insie">
                    <br/><br/> Facebook<br/><br/>Instagram<br/><br/>Twitter
                </div>
                <div className="footerline1insie">
                    <br/><br/> Support <br/><br/>App Info<br/><br/>Privacy
                </div>
            </div>
            <div className="footerline2">
                <span style={{fontSize: "1rem", textShadow: "0px 0px 7px  black"}}>
                    © Design n Code by 
                
                    Sagar Wankhade
                </span>
            </div>
        </footer>
    )
}
