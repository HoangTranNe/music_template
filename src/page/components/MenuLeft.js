import React from 'react';

function MenuLeft(){
    return (
    <div className="position-fixed h-100 pt-3 ps-2 d-flex flex-column" style={{width: "15%", backgroundColor: "black"}}>
        <div className="logo" style={{zIndex: "0"}}>
            <a href='../Playlists'>
                <img src="img/logo.png" width="70%" className="mb-3" alt="Logo" />
            </a>
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
            <img src="img/playlist.png" width="30px" height="30px" alt="Playlist Icon"/>
            <span className="ms-3 align-bottom">Create Playlist</span>
        </div>
        <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
            <img src="img/icon-like.png" width="30px" height="30px" alt="Liked Songs Icon"/>
            <span className="ms-3 align-bottom">Liked Songs</span>
        </div>
        <div className="mt-auto pt-3 pb-3 ps-2">
            <div className="d-flex mb-3">
                <div className="me-3">
                    <a href="#" style={{color: "#B3B3B3"}} className="text-decoration-none">Legal</a>
                </div>
                <div>
                    <a href="#" style={{color: "#B3B3B3"}} className="text-decoration-none">Privacy Center</a>
                </div>
            </div>
            <div className="d-flex mb-3">
                <div className="me-3">
                    <a href="#" style={{color: "#B3B3B3"}} className="text-decoration-none">Privacy Policy</a>
                </div>
                <div>
                    <a href="#" style={{color: "#B3B3B3"}} className="text-decoration-none">Cookies</a>
                </div>
            </div>
            <div className="d-flex mb-3">
                <div>
                    <a href="#" style={{color: "#B3B3B3"}} className="text-decoration-none">About Ads</a>
                </div>
            </div>
            <div className="d-flex mb-4">
                <div>
                    <a href="#" style={{color: "#B3B3B3"}} className="text-decoration-none">Cookies</a>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-secondary d-flex align-items-center" style={{borderRadius: "25px"}}>
                    <img src="img/icon-english.png" className="me-2" alt="English Language Icon"/>
                    <span className="text-white">English</span>
                </button>
            </div>
        </div>
    </div>
      );
}

export default MenuLeft;
