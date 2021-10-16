import React from 'react';
import './Page2.css';


export default function Page2(){
    return(
        <div className="page2">
        <div className="content2">
            <span style={{fontSize: "1.6rem", fontWeight: "bold", marginLeft: "4px"}}> My Skills</span>
            <hr className="skillline"/>
            <div className="alltables">
                <table className="tabl">
                    <tr><th colSpan="2">Languages</th></tr>
                    <tr><td>JAVA</td><td>SQL</td></tr>
                    <tr><td>JAVASCRIPT</td><td>HTML, CSS</td></tr>
                    <tr><td>C</td><td>C++</td></tr>
                </table>
                <table className="tabl">
                    <tr><th colSpan="2">IDE / Tools</th></tr>
                    <tr> <td>Eclipse</td> <td>VS code</td> </tr>
                    <tr> <td>Github</td> <td>Jenkins</td> </tr>
                    <tr> <td>Soap UI</td> <td>Salesforce</td> </tr>
                </table>
                <table className="tabl">
                    <tr><th colSpan="2">Frameworks</th></tr>
                    <tr> <td>Spring Boot</td> <td>JUnit</td> </tr>
                    <tr> <td>React.js</td> <td>Node.js</td> </tr>
                    <tr> <td></td> <td></td> </tr>
                </table>
            </div>
        </div>
    </div>
    );
}