import React from 'react';
import Main from './Main'

function Podcast({menu, footer, item}){
    return (
        <div>
            {
                menu()
            }
            {
                footer()
            }
            <Main item={item}/>
        </div>
      );
}

export default Podcast;