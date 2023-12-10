import React from 'react';
import Main from './Main';
import Menu from '../components/MenuLeft';

const Search = () => {
  const search = ({    
    fontFamily: "monospace",
    fontSize: "15px",        
    fontWeight: "bold"  
  });
  return (
    <div style={search}>      
        <Menu/>   
        
        <Main/>
        
    </div>
  );
};
export default Search;

