import React from "react";
import Main from "./Main"
import Menu from "../components/MenuLeft";

function Artist () {
    return (
        <div style={{
            backgroundColor: "#121212",
            color: "white",
            height: "100vh",
            fontFamily: "monospace",
            fontSize: "15px",        
            fontWeight: "bold"
        }}>
            <Menu/>            
            <Main/>                   
        </div>
    );
}   
export default Artist;