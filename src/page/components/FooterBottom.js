import React from 'react';

function FooterBottom(){
    return (
        <div className="position-fixed bottom-0 p-3 d-flex justify-content-between w-100 align-items-center text-white" 
    style={{backgroundImage: "linear-gradient(to right, #AF2896, #509BF5)", zIndex: "1"}}>
        <div>
            <div>
                Preview of Spotify
            </div>
            <div>
                Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
            </div>
        </div>
        <div>
            <button className="btn ps-4 pe-4 fw-bold pt-2 pb-2" style={{backgroundColor: "white", borderRadius: "25px"}}>
                Sign up free
            </button>
        </div>
    </div>
      );
}

export default FooterBottom;