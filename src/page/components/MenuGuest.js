import React from 'react';

function MenuLeft(){
    return (
    <div className="position-fixed h-100 pt-3 ps-2 d-flex flex-column" style={{width: "15%", backgroundColor: "black", fontFamily: "monospace", fontWeight: "100"}}>
        <div className="logo" style={{zIndex: "0"}}>
            <img src="img/logo.png" width="70%" className="mb-3" alt="Logo" />            
        </div>
        <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
            <img src="img/icon-home.png" width="30px" height="30px" alt="Home Icon"/>
            <span className="ms-3 fs-4 align-bottom">Home</span>
        </div>
        <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
            <img src="img/icon-search.png" width="30px" height="30px" alt="Search Icon"/>
            <a href='./Search' style ={{
                color: "#B3B3B3",
                textDecoration: "none"
            }}className="ms-3 align-bottom">Search</a>
        </div>
        <div className="mb-5 ps-1" style={{color: "#B3B3B3"}}>
            <img src="img/icon-lib.png" width="30px" height="30px" alt="Library Icon"/>
            <span className="ms-3 align-bottom">Your Library</span>
        </div>
        <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
            <h5> Login to experience all the features </h5>
        </div>
    </div>
      );
}

export default MenuLeft;
