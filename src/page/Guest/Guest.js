import React from "react";
import Menu from "../components/MenuLeft";
import Main from "../components/MainGuest"
import FooterGuest from "../components/FooterGuest";
function Guest ({item}) {
    return(
        <div>
            <Menu/>
            
            <Main item = {item}/>        
            
        </div>
    );
}
export default Guest;