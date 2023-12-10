import React from "react";
const Footer = () => {
    return (
      <div className="footer" style={{        
        backgroundColor: "black",
        padding: "50px",
        fontFamily: "sans-serif",        
      }}>
        <h5 style={{          
          color: "gray"
        }}>If you still need help, check out <a style={{
          textDecoration: "none",             
        }}href="https://support.spotify.com">Spotify Support</a></h5>
      </div>
    );
  };
export default Footer;