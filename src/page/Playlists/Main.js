import React from 'react';
import { Link } from 'react-router-dom';
import Top from '../components/Top';

function Main({item}){
    return <div>
    <div style={{marginLeft: "15%", background: "rgba(0, 0, 0, 0.89)", minHeight: "100vh"}}>
        <Top/>
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
                        item("img/item-6.png", "Your Episodes", "14 episodes")
                    }
                    {
                        item("img/item-7.png", "Bollywood Jazz", "The best of Jazz music from Bollywood. Cover- A R Rahman")
                    }
                    {
                        item("img/item-8.png", "Hangover Cure", "Trust us, you need this!")
                    }
                </div>
            </div>
            <div className="pb-5">
                <div className="d-flex mb-5">
                    {
                        item("img/item-1.png", "Every Parent's Nightmare", "Sep 2022 · 36 min")
                    }
                    {
                        item("img/item-2.png", "How the Pell Grant helped POCs go to college", "Sep 2022 · 29 min")
                    }
                    {
                        item("img/item-3.png", "After 10 Years", "Jul 2022 · 62 min")
                    }
                    {
                        item("img/item-4.png", "Book Exploder: Min Jin Lee - Pachinko", "Aug 2022 · 20 min")
                    }
                    {
                        item("img/item-5.png", "Healing Through Music with TOKiMONSTA", "Aug 2022 · 26 min")
                    }
                </div>
            </div>
        </div>
    </div>
</div>;
}

export default Main;