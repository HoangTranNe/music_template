function Main(){
    return <div>
        <div style={{marginLeft: "15%", backgroundColor: "#F8C8A0", minHeight: "100vh"}} className="position-relative">
            <div className="position-absolute w-100 h-50 d-flex flex-column" style={{bottom: "0px", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
                <div className="d-flex align-items-center ps-5 pt-5">
                    <div style={{color: 'rgba(255, 255, 255 ,0.7)', fontSize: "18px"}}>
                        Mar 19 · 1 hr 28 min left
                    </div>
                    <div style={{height: "5px", width: "200px", backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "10px"}} className="ms-3">

                    </div>
                </div>
                <div className="d-flex align-items-center ps-5 pt-4">
                    <div className="me-4">
                        <img src="/static/img/icon5.png"/>
                    </div>
                    <div className="me-4">
                        <img src="/static/img/icon4.png"/>
                    </div>
                    <div>
                        <img src="/static/img/icon3.png"/>
                    </div>
                </div>
                <div className="d-flex align-items-center ps-5 pt-4 text-white h3">
                    Episode Description
                </div>
                <div className="ps-5 mt-auto pb-5" style={{color: "rgba(255, 255, 255, 0.75)", backgroundColor: "rgba(0, 0, 0, 0.71)", height: "155px"}}>
                    <div style={{width: "700px", wordBreak: "break-all"}}>
                    Brought to you by <span className="ms-1 text-white">Writer</span>—Generative AI for the enterprise | <span className="text-white ms-1">Dovetail</span>—Bring your customer into every decision | Linear—The new standard for modern software developm
                    </div>
                </div>
            </div>
            <div className="position-absolute" style={{height: "430px", bottom: "0", right: "0", width: "500px", backgroundColor: "black"}}>

            </div>
        </div>
    </div>;
}

export default Main;