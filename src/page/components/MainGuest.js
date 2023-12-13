import React from 'react';
import { Link } from 'react-router-dom';
import Top from '../components/Top';
import FooterGuest from "../components/FooterGuest";
function Main({item}){
    return <div>
    <div style={{marginLeft: "15%", background: "rgba(0, 0, 0, 0.89)", minHeight: "100vh"}}>
        <Top/>
        <br/>
        <br/>
        <br/>
        <div style={{paddingLeft: "25px", minHeight: "95vh"}}>
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
        
        <FooterGuest/>
    </div>
</div>;
}

export default Main;