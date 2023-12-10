import React from 'react';
import "../static/css/style.css";
function Login(){
    return <div>
    <header>
      <div className="logo">
        <a href="#">
          <img src="img/logo-black.png" alt="Logo" />          
        </a>
      </div>
    </header>

    <section>
      <div className="main">
        <div className="account-connect">
          <button className="a-c-btn" id="f" style={{backgroundColor: "#1877F2", color: "white"}} >
            <img src="img/icon-fb.png" alt="Facebook Icon" />
            <span>Continue with Facebook</span>
          </button>
          <button className="a-c-btn" id="a" style={{backgroundColor: "black", color: "white"}}>
            <img src="img/icon-apple.png" alt="Apple Icon" />
            <span>Continue with Apple</span>
          </button>
          <button className="a-c-btn" id="g" style={{backgroundColor: "white", color: "black"}}>
            <img src="img/icon-google.png" alt="Google Icon" />
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="d-flex justify-content-center mt-2">
            <div style={{height: "2px", width: "180px", backgroundColor: "#d9d9d9", marginTop: "10px", marginRight: "20px"}} />
            <span className='fw-bold'>OR</span>
            <div style={{height: "2px", width: "180px", backgroundColor: "#d9d9d9", marginTop: "10px", marginLeft: "20px"}} />
        </div>

        <div className="log-in">
          <form className='position-relative'>
            <label>Email address or username</label>
            <input type="text" placeholder="Email or username" />

            <label>Password</label>
            <input type="password" placeholder="Password" />           


            <a href="../Forgot" className='d-flex' style={{color: "black", marginBottom: "5px"}}>Forgot your password?</a>
            
            <div className='d-flex justify-content-between'>
                <div className="d-flex align-items-center">
                    <input type="checkbox" style={{width: "10px", margin: "0", marginRight: "10px", backgroundColor: "#1ed760"}} />
                    <span style={{fontWeight: "normal"}}>Remember me</span>
                </div>

                <button style={{width: "150px"}}>
                  <a href="../Playlists" style = {{
                    textDecoration: 'none',
                    color: 'black'
                  }}> Log in </a>
                </button>
            </div>
            
          </form>
        </div>

        <div style={{height: "2px", width: "430px", backgroundColor: "#d9d9d9", marginLeft: "120px"}} />

        <div className="d-flex flex-column align-items-center mt-4">
          <span className='h5' style={{color: "black"}}>Don't you have an account?</span>
          <a href="../Register" className='btn fw-bold pt-2 pb-2 mt-3' style={{borderWidth: "1px", borderStyle: "solid", borderColor: "#d9d9d9", width: "430px", borderRadius: "25px", color: "#666666"}}>Sign up for Spotify</a>
        </div>
      </div>
    </section>
    </div>;
}

export default Login;