import React from "react";
const Button = () => {
  return (
    <section style={{
      fontFamily: "sans-serif",
      backgroundColor: "black",
      textAlign: "center",
      display:'grid',
      justifyContent:"center",
      height: '50%'
    }}>      
      <div className="thirdLogin" style={{
        backgroundColor:"black"
      }}>
        <div className="d-flex justify-content-center mt-4">
            <div style={{height: "2px", width: "180px", backgroundColor: "#d9d9d9", marginTop: "10px", marginRight: "20px"}} />
            <span className='fw-bold'>OR</span>
            <div style={{height: "2px", width: "180px", backgroundColor: "#d9d9d9", marginTop: "10px", marginLeft: "20px"}} />
        </div>
        <div className="account-connect"
             style={{
                display:"grid"
             }}> 

          <button className="a-c-btn" id="f" style={{
              backgroundColor: "#1877F2", color: "white",
              marginTop:"30px",
              padding:"10px",
              fontSize:"16px",
              borderRadius:"5px",
              border:"none",
              outline:"none"
            }}>
            <img src="img/icon-fb.png" alt="Facebook Icon" />
            <span>Continue with Facebook</span>
          </button>

          <button className="a-c-btn" id="a" style={{
            backgroundColor: "black", color: "white",
            marginTop:"30px",
            padding:"10px",
            fontSize:"16px",
            borderRadius:"5px",
            border:"none",
            outline:"none"
            }}>
            <img src="img/icon-apple.png" alt="Apple Icon" />
            <span>Continue with Apple</span>
          </button>

          <button className="a-c-btn" id="g" style={{
            backgroundColor: "white", color: "black",            
            marginTop:"30px",
            padding:"10px",
            fontSize:"16px",
            borderRadius:"5px",
            border:"none",
            outline:"none"
            }}>
            <img style = {{
              height: "20px",
              width: "20px"
            }} src="img/icon-google.png" alt="Google Icon" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>  
    
  );
};

export default Button;
