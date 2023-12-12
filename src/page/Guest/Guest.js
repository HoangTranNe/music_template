import React from "react";
import Menu from "../components/MenuLeft";
import Main from "../Playlists/Main"
import FooterGuest from "../components/FooterGuest";
function Guest ({item}) {
    return(
        <div>
            <Menu/>
            <Main item = {item}/>     
            <FooterGuest/>
        </div>
    );
}
export default Guest;