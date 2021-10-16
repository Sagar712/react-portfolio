import React from 'react'
import "./Page4.css";

export default function Page4() {
    return (
        <div className="page4">

            <div className="contentContact">
                <div className="allinform3" style={{lineHeight: "1.5rem"}}>
                    <span style={{fontSize: "1.3rem"}}>
                        I have created an app which <span style={{color: "rgb(253, 0, 84)"}}>can protect</span>     all your passwords, secret chats etc.. using
                        <span style={{color: "rgb(253, 0, 84)"}}> Encryption technology.
                        </span> Few benefits of this App are :-
                        <br/>
                        <br/>
                        <span style={{color: "rgb(0, 253, 177)",fontSize: "1.2rem"}}>
                            - Easy to use
                            <br/>
                            <span style={{color: "rgb(0, 194, 253)"}}>- Free </span>
                            <br/>
                            - A single KEY can hide all data
                            <br/>
                            <span style={{color: "rgb(0, 194, 253)"}}>- 100% Secure </span>
                            <br/>
                            - 110 KB size only !
                        </span> 
                    </span>
                </div>

                <div className="forma2">
                    <a href="./Script.apk" download>
                        <button className="downloadbtn">Download Apk</button>
                    </a>
                    <br/><br/>
                    <a href="https://sagar712.github.io/application" target="_blank">
                        <button className="downloadbtn">Go to WebApp</button>
                    </a>
                </div>
                
            </div>
        </div>
    )
}
