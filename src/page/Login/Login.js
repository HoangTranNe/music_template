import React from 'react';
<<<<<<< HEAD
=======
import ".../static/css/style";
>>>>>>> 2cd2f2a97c32bf8e1a7cd2215b141259da2946c2
function Login(){
    return <div>
        <header>
      <div class="logo">
        <a href="#">
<<<<<<< HEAD
          <img src="/static/img/logo-black.png" alt="Logo" />
=======
          <img src="/static/img/logo-black.png" />
>>>>>>> 2cd2f2a97c32bf8e1a7cd2215b141259da2946c2
        </a>
      </div>
    </header>

    <section>
      <div class="main">
        <div class="account-connect">
            <button class="a-c-btn" id="f" style={{backgroundColor: "#1877F2", color: "white"}} >
<<<<<<< HEAD
            <img src="/static/img/icon-fb.png" alt="Facebook Icon" />
            <span>Continue with Facebook</span>
          </button>
          <button class="a-c-btn" id="a" style={{backgroundColor: "black", color: "white"}}>
            <img src="/static/img/icon-apple.png" alt="Apple Icon" />
            <span>Continue with Apple</span>
          </button>
          <button class="a-c-btn" id="g" style={{backgroundColor: "white", color: "black"}}>
            <img src="/static/img/icon-google.png" alt="Google Icon" />
=======
            <img src="/static/img/icon-fb.png"/>
            <span>Continue with Facebook</span>
          </button>
          <button class="a-c-btn" id="a" style={{backgroundColor: "black", color: "white"}}>
            <img src="/static/img/icon-apple.png" />
            <span>Continue with Apple</span>
          </button>
          <button class="a-c-btn" id="g" style={{backgroundColor: "white", color: "black"}}>
            <img src="/static/img/icon-google.png" />
>>>>>>> 2cd2f2a97c32bf8e1a7cd2215b141259da2946c2
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="d-flex justify-content-center mt-2">
            <div style={{height: "2px", width: "180px", backgroundColor: "#d9d9d9", marginTop: "10px", marginRight: "20px"}} />
            <span className='fw-bold'>OR</span>
            <div style={{height: "2px", width: "180px", backgroundColor: "#d9d9d9", marginTop: "10px", marginLeft: "20px"}} />
        </div>

        <div class="log-in">
          <form className='position-relative'>
            <label>Email address or username</label>
            <input type="text" placeholder="Email or username" />

            <label>Password</label>
            <input type="password" placeholder="Password" />
<<<<<<< HEAD
            <img src='/static/img/showPass.png' alt="Show Password" className='position-absolute' style={{top: "142px", right: "10px"}}/>
=======
            <img src='/static/img/showPass.png' className='position-absolute' style={{top: "142px", right: "10px"}}/>
>>>>>>> 2cd2f2a97c32bf8e1a7cd2215b141259da2946c2

            <a href="#" className='d-flex' style={{color: "black", marginBottom: "5px"}}>Forgot your password?</a>
            
            <div className='d-flex justify-content-between'>
                <div class="d-flex align-items-center">
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

        <div class="d-flex flex-column align-items-center mt-4">
          <span className='h5' style={{color: "black"}}>Don't you have an account?</span>
          <a href="#" className='btn fw-bold pt-2 pb-2 mt-3' style={{borderWidth: "1px", borderStyle: "solid", borderColor: "#d9d9d9", width: "430px", borderRadius: "25px", color: "#666666"}}>Sign up for Spotify</a>
        </div>
      </div>
    </section>
    </div>;
}

export default Login;