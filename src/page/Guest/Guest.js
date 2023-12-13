import React from "react";
import Menu from "../components/MenuGuest";
import Main from "../components/MainGuest";
function Guest ({item}) {
    return(
        <div>
            <Menu/>
            <Main item = {item}/>                    
        </div>
    );
}
export default Guest;