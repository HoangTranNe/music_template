function Footer(){
    return <div className="position-fixed bottom-0 p-3 d-flex justify-content-between w-100 align-items-center text-white" 
    style={{zIndex: "1", height: "121px", backgroundColor: "#282828"}}>
        <div className="d-flex">
            <div style={{width: "300px", overflow: "hidden"}}>
                <div style={{width: "1000px"}}>
                    Competing with giants: An inside look at how The Browser Company builds product | Josh Miller (CEO)
                </div>
                <div style={{width: "1000px"}}>
                    Lenny's Podcast: Product | Growth | Career
                </div>
            </div>
            <div className="d-flex align-items-center ms-3">
                <img src="/static/img/icon-add.png" width="20px" height="20px" className="me-2" />
                <img src="/static/img/icon-yt.png" width="20px" height="20px" />
            </div>
        </div>
        
        <div className="d-flex flex-column" style={{width: "1000px"}}>
            <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="me-2">
                    <img src="/static/img/icon-prev-15.png"/>
                </div>
                <div className="me-2">
                    <img src="/static/img/icon-prev.png"/>
                </div>
                <div className="me-2 ps-1 d-flex align-items-center justify-content-center" style={{backgroundColor: "white", 
                width: "25px", height: "25px", borderRadius: "50%"}}>
                    <img src="/static/img/icon-play.png"/>
                </div>
                <div className="me-2">
                    <img src="/static/img/icon-next.png"/>
                </div>
                <div className="me-2">
                    <img src="/static/img/icon-next-15.png"/>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="me-2" style={{color: "#A7A7A7"}}>0:53</div>
                <div class="seekbar">
                    <div class="count">
                        <div class="progress" style={{width: "1%"}}>

                        </div>
                    </div>
                </div>
                <div className="ms-2" style={{color: "#A7A7A7"}}>
                    1:26:37
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <div className="me-2">
                <img src="/static/img/icon1.png" />
            </div>
            <div className="me-2">
                <img src="/static/img/icon2.png" />
            </div>
            <div className="d-flex">
                <img src="/static/img/icon-sound.png" className="me-1" />
                <div class="seekbar-sound">
                    <div class="count-sound">
                        <div class="progress-sound" style={{width: "100%"}}>

                        </div>
                    </div>
                </div>
            </div>
            <div className="ms-2">
                <img src="/static/img/icon-fullscreen.png" />
            </div>
        </div>
    </div>;
}

export default Footer;