import React from 'react';
import { Link } from 'react-router-dom';
import Top from '../components/Top';
function Main({item}){
    return (
        <div>
            <div style={{marginLeft: "15%", background: "rgba(0, 0, 0, 0.89)"}} className="d-flex justify-content-between ps-3 pe-3 pt-2 pb-2">                            
            <Top/>
                <div className="d-flex align-items-center">
                    <div>
                        <button style={{color: "#A7A7A7"}} className="btn">Sign up</button>
                    </div>
                    <div>
                        <button style={{backgroundColor: "white", borderRadius: "25px"}} className="text-black btn ps-4 pe-4 ms-4">Log in</button>
                    </div>
                </div>
            </div>
            <div style={{marginLeft: "15%", background: "rgba(0, 0, 0, 0.83)", minHeight: "100vh"}}>
                <div style={{fontSize: "55px", fontWeight: "bold", paddingTop: "55px", marginLeft: "25px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "30px"}}>
                    Podcast
                </div>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.7)", paddingLeft: "25px", minHeight: "95vh"}}>
                    <div className="pt-3 pb-5">
                        <div className="text-white h4 mt-3">
                            Best Episodes - Editor's Picks
                        </div>
                        <div className="d-flex mt-3">
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
                    <div className="pt-3 pb-5">
                        <div className="text-white h4">
                            Best of: Brown Bag
                        </div>
                        <div className="d-flex mt-3">
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
        </div>
      );
}

export default Main;