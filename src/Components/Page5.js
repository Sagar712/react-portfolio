import React from 'react'
import "./Page5.css";

export default function Page5() {

    let spinner = document.querySelector(".loadingOverlay");
    const AppUrl = 'https://secret-script.herokuapp.com/script/';


    function submitClick() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let status = document.getElementById("status").value;
        try {
            if(name!=="" && email!==""){
                spinner.classList.add("active");
                if(status==="")
                    status="Nil";
                const data = {
                    username: name,
                    email: email,
                    password: status
                };
            
            
                fetch(AppUrl,{method:'post', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
                .then(res => {
                    spinner.classList.remove("active");
                    return res.json();
                    
                })
                .then(response => {
                    
                    console.log(response);
                    alert(response.msg);
                });
            }
        
            else
            alert("Please enter info before submittig");
        } catch (error) {
            console.log(error);
        }
        
        
    }

    return (
        <div className="page4">

            <div className="contentContact">
                <div className="allinform2">
                    <span>
                        I can help you to get <br/> <span style={{color: "rgb(201, 0, 67)"}}>Better Website
                        </span>  with <span style={{color: "rgb(70, 197, 108)"}}> <br/> Lesser Money</span> 
                    </span>
                </div>

                <div className="forma">
                    <div className="maincon">
                        <div className="leftones">
                            <p>Full Name:<sup style={{color: "red", fontSize: "1rem"}}>*</sup> </p> 
                            
                            <p>Email Id:<sup style={{color: "red", fontSize: "1rem"}}>*</sup></p>
                            
                            <p>Requirement:</p>
                        </div>
                        <div className="rightones">
                            <input type="text" id="name" autoComplete="off"/>
                            
                            <input type="text" id="email" autoComplete="off"/>
                            
                            <input type="text" id="status" autoComplete="off"/>
        
                        </div>
                    </div>
                    <div className="buttoncon">
                        <button className="submii" onClick={submitClick}>Submit</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );

}
