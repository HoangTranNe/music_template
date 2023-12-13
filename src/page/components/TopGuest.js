import React from 'react';
import Button from './ButtonTop'

function Top() {
  const Logout = {
    color: "white",
    textDecoration: "none"
  }
  return (
    <div>
        <div className="d-flex align-items-center pt-2 pb-2" style={{
                position: "fixed",
                backgroundColor: "#333333",                                            
                width: "100%",                                
                fontSize: "16px",
                color: "white",
                fontWeight: "bold",                
                transition: ".3s ease-in-out all",
            }}>            
            <div style={{
                marginLeft: "1200px",

            }}>
                <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "5px", padding: "10px", marginLeft: "10px"}}>
                    <a href = "../Login" style={Logout}>Login</a>
                </button>
                <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "5px", padding: "10px", marginLeft: "10px"}}>
                    <a href = "../Register" style={Logout}>Register</a>
                </button>
                <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "5px", padding: "10px", marginLeft: "10px"}}>
                    <a href='../Login' style={Logout}>Log out</a>
                </button>
            </div>
        </div>        
    </div>
    
  );
}

export default Top;
