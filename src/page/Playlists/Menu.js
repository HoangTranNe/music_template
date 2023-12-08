function Menu(){
<<<<<<< HEAD

    return <div className="position-fixed h-100 pt-3 ps-2 d-flex flex-column" 
            style={{
                width: "15%", 
                backgroundColor: "black",
            }}>
    <div className="logo" style={{zIndex: "0"}}>
        <img src="/static/img/logo.png" alt="Logo" width="70%" className="mb-3" />
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-home.png" alt="Home Icon" width="30px" height="30px"/>
        <span className="ms-3 fs-5 align-bottom">Home</span>
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-search.png" alt="Search Icon" width="30px" height="30px"/>
        <a href='./Search' style ={{
                color: "#B3B3B3",
                textDecoration: "none"
            }}className="ms-3 align-bottom">Search</a>
    </div>
    <div className="mb-5 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-lib.png" alt="Library Icon" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Your Library</span>
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/playlist.png" alt="Playlist Icon" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Create Playlist</span>
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-like.png" alt="Liked Songs Icon" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Liked Songs</span>
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-episodes.png" alt="Episodes Icon" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Your Episodes</span>
    </div>
    <div className="mt-auto pt-3 pb-3 position-absolute" style={{bottom: "98px", left: "0"}}>
    <div className="mb-3" style={{
            color: "#B3B3B3", 
            marginLeft: "11px",
        }}>
        <img src="/static/img/icon-install.png" alt="Install App Icon" width="30px" height="30px"/>
        <span className="ms-3 align-center">Install App</span>
    </div>
=======
    return <div className="position-fixed h-100 pt-3 ps-2 d-flex flex-column" style={{width: "15%", backgroundColor: "black"}}>
    <div className="logo" style={{zIndex: "0"}}>
        <img src="/static/img/logo.png" width="70%" className="mb-3" />
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-home.png" width="30px" height="30px"/>
        <span className="ms-3 fs-4 align-bottom">Home</span>
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-search.png" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Search</span>
    </div>
    <div className="mb-5 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-lib.png" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Your Library</span>
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/playlist.png" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Create Playlist</span>
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-like.png" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Liked Songs</span>
    </div>
    <div className="mb-3 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-episodes.png" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Your Episodes</span>
    </div>
    <div className="mt-auto pt-3 pb-3 position-absolute" style={{bottom: "98px", left: "0"}}>
    <div className="mb-3" style={{color: "#B3B3B3", marginLeft: "11px"}}>
        <img src="/static/img/icon-install.png" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Install App</span>
    </div>
        <div>
            <img src="/static/img/img-baner.png" width="100%" height="400px"/>
        </div>
>>>>>>> 2cd2f2a97c32bf8e1a7cd2215b141259da2946c2
    </div>
</div>;
}
export default Menu;