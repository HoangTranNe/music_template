import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const Register = () => {
  return (
    <div style={{
      fontFamily: "sans-serif",
      backgroundColor: "black",
      textAlign: "center",        
      height: "872px"
    }}>
        <a href="./login">
          <img src="img/logo.png" alt="Spotify logo"
            style={{
              marginTop:"50px",
              marginLeft: "-1400px"
            }}
          />
        </a>
      <Header />
      <Form />
      <Footer/>
    </div>
  );
};

export default Register;
