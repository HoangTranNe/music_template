import React from 'react';
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
            }
            <Main item={item}/>
        </div>
      );
}

export default Podcast;