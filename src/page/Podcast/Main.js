import React from 'react';
import Top from '../components/Top';
function Main({item}){
    return (
        <div>
            <div style={{marginLeft: "15%", background: "rgba(0, 0, 0, 0.83)", minHeight: "100vh"}}>
                <div>
                    <Top/>                    
                </div>            
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
                    <div className="pt-3 pb-5">
                        <div className="text-white h4">
                            Best of: Brown Bag
                        </div>
                        <div className="d-flex mt-3">
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
        </div>
      );
}

export default Main;