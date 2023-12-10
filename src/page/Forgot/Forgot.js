import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Main";
const Forgot = () => {
    return (
      <div className="app" style={{
        fontFamily: "sans-serif",
        backgroundColor: "black",
        textAlign: "center",        
        height: "959px"
      }}>
        <a href="./login">
          <img src="img/logo.png" alt="Spotify logo"
            style={{
              marginTop:"50px",
              marginLeft: "-1500px"
            }}
          />
        </a>
        <section style={{
          display: "grid",
          marginTop:'-100px',
          backgroundColor: "black",
          padding: "300px",
          fontFamily: "sans-serif",
          textAlign: "center",
          height: "959px"
        }}>
          <Header />
          <Form />
          <Footer />  
        </section>
      </div>
    );
  };
export default Forgot;
  