import React from 'react';
import { Link } from 'react-router-dom';

function Main({item}){
    return <div>
    <div style={{marginLeft: "15%", background: "rgba(0, 0, 0, 0.89)"}} className="d-flex justify-content-between ps-3 pe-3 pt-2 pb-2">
        <div className="d-flex align-items-center pt-2 pb-2">
            <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "50%", width: "30px", height: "30px", border: "0"}} 
            class="me-2">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button style={{background: "rgba(0, 0, 0, 0.9)", color: "white", borderRadius: "50%", width: "30px", height: "30px", border: "0"}} >
                <i className="fas fa-chevron-right"></i>
            </button>
            <div style={{backgroundColor: "#333333", color: "white"}} className='p-2 ps-4 pe-4 ms-3'>
                Playlist
            </div>
            <Link to="/podcast" style={{color: "white"}} className='p-2 ps-4 pe-4 ms-3 text-decoration-none'>
                Podcasts
            </Link>
            <div style={{color: "white"}} className='p-2 ps-4 pe-4 ms-3 text-decoration-none'>
                Artists
            </div>
            <div style={{color: "white"}} className='p-2 ps-4 pe-4 ms-3 text-decoration-none'>
                Albums
            </div>
        </div>
        <div className="d-flex align-items-center">
            <button className='btn p-0 ps-0 pe-1' style={{backgroundColor: "black", borderRadius: "25px"}}>
                <img src='/static/img/icon-user.png'/>
                <span className='text-white ms-2 me-2'>Rajarshi B</span>
                <img src='/static/img/icon-arrow-bottom.png'/>
            </button>
        </div>
    </div>
    <div style={{marginLeft: "15%", background: "rgba(0, 0, 0, 0.89)", minHeight: "100vh"}}>
        <div style={{fontSize: "35px", fontWeight: "bold", paddingTop: "35px", marginLeft: "25px", color: "white", marginBottom: "30px"}}>
            Playlists
        </div>
        <div style={{paddingLeft: "25px", minHeight: "95vh"}}>
            <div className="pb-5">
                <div className="d-flex">
                    <div style={{backgroundImage: "linear-gradient(135deg, #450AF5, #8E8EE5)", width: "620px", color: "white", borderRadius: "15px"}} className='me-4 ps-3'>
                        <div style={{marginTop: "190px", fontSize: "25px"}}>
                            <span>Ali Sethi </span>
                            <span style={{color: "rgba(255, 255, 255, 0.4)"}}>Ranjish Hi Sahi</span>
                            <span style={{color: "rgba(255, 255, 255, 0.4)"}}>  • </span>
                            <span>Willum Maindo </span>
                            <span style={{color: "rgba(255, 255, 255, 0.4)"}}>Heaven</span>
                        </div>
                        <div className='mt-5 fs-1 fw-bold'>
                            Liked Songs
                        </div>
                        <div className='mt-4 fs-5'>
                            2 liked songs
                        </div>
                    </div>
                    {
                        item("/static/img/item-6.png", "Your Episodes", "14 episodes")
                    }
                    {
                        item("/static/img/item-7.png", "Bollywood Jazz", "The best of Jazz music from Bollywood. Cover- A R Rahman")
                    }
                    {
                        item("/static/img/item-8.png", "Hangover Cure", "Trust us, you need this!")
                    }
                </div>
            </div>
            <div className="pb-5">
                <div className="d-flex mb-5">
                    {
                        item("/static/img/item-1.png", "Every Parent's Nightmare", "Sep 2022 · 36 min")
                    }
                    {
                        item("/static/img/item-2.png", "How the Pell Grant helped POCs go to college", "Sep 2022 · 29 min")
                    }
                    {
                        item("/static/img/item-3.png", "After 10 Years", "Jul 2022 · 62 min")
                    }
                    {
                        item("/static/img/item-4.png", "Book Exploder: Min Jin Lee - Pachinko", "Aug 2022 · 20 min")
                    }
                    {
                        item("/static/img/item-5.png", "Healing Through Music with TOKiMONSTA", "Aug 2022 · 26 min")
                    }
                </div>
            </div>
        </div>
    </div>
</div>;
}

export default Main;