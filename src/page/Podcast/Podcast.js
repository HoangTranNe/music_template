import React from 'react';
<<<<<<< HEAD
import Main from './Main';
import Menu from '../components/MenuLeft'
function Podcast({item}){
    return (
        <div style={{
            fontFamily: "monospace",
            fontSize: "15px",        
            fontWeight: "bold"
        }}>  
            <Menu/>
            {
                // footer()
=======
import Main from './Main'

function Podcast({menu, footer, item}){
    return (
        <div>
            {
                menu()
            }
            {
                footer()
>>>>>>> 2cd2f2a97c32bf8e1a7cd2215b141259da2946c2
            }
            <Main item={item}/>
        </div>
      );
}

export default Podcast;