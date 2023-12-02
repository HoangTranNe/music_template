function Menu(){
    return <div className="position-fixed h-100 pt-3 ps-2 pe-4 d-flex flex-column" style={{width: "15%", backgroundColor: "black"}}>
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
    <div className="mb-5 ps-1" style={{color: "#B3B3B3"}}>
        <img src="/static/img/icon-episodes.png" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Your Episodes</span>
    </div>
    <div style={{height: "1px", width: "100%", backgroundColor: "rgba(255, 255, 255, 0.3)"}}/>
    <div className="mt-auto pt-3 pb-3 position-absolute" style={{bottom: "98px", left: "0"}}>
    <div className="mb-3" style={{color: "#B3B3B3", marginLeft: "11px"}}>
        <img src="/static/img/icon-install.png" width="30px" height="30px"/>
        <span className="ms-3 align-bottom">Install App</span>
    </div>
    </div>
    <div className="mb-3 mt-3" style={{color: "#B3B3B3"}}>
        <span className="ms-1 align-bottom">Bollywood Jazz</span>
    </div>
    <div className="mb-3 mt-3" style={{color: "#B3B3B3"}}>
        <span className="ms-1 align-bottom">Hangover Cure</span>
    </div>
    <div className="mb-3 mt-3" style={{color: "#B3B3B3"}}>
        <span className="ms-1 align-bottom">Your Top Songs 2022</span>
    </div>
    <div className="mb-3 mt-3" style={{color: "#B3B3B3"}}>
        <span className="ms-1 align-bottom">Desi Indie</span>
    </div>
    <div className="mb-3 mt-3" style={{color: "#B3B3B3"}}>
        <span className="ms-1 align-bottom">Rock in India</span>
    </div>
    <div className="mb-3 mt-3" style={{color: "#B3B3B3"}}>
        <span className="ms-1 align-bottom">RADAR India</span>
    </div>
</div>;
}
export default Menu;