import React from "react";

const Header = () => {
  return (
    <header style={{
      fontFamily: "sans-serif",
      backgroundColor: "black",
      display: '-ms-inline-grid'
    }}>
      <h1 style={{
        color: 'gray',
        textAlign: "center",        
      }}>Đăng ký</h1>
      <button style = {{
         padding: "10px",
         fontSize: "16px",
         borderRadius: "5px",
         border: "none",
         outline: "none",
         backgroundColor: "green",
         color: "white"        
      }}onClick={() => window.history.back()}>Quay lại</button>
    </header>
  );
};

export default Header;
