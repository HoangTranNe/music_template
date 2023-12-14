import React from "react";
import  MainMainContent  from "./components/MainMainContent";
import Top from "../components/Top";
import MenuLeft from "../components/MenuLeft";
const ProfileArtist = () => {
    return (        
        <div className="box" style={{ position:"relative", height: "174px", width: "100%", marginLeft: "-200px", marginTop : "70px", font: "700 20px/24px Circular Std, -apple-system, Roboto, Helvetica, sans-serif"}}>
            <div>
                <Top/>
                <MenuLeft/>
            </div>
            <div className="recent-searches" style={{ height: "254px", width: "1036px" }}>                           
                <div className="frame-2" style={{ alignItems: "center", display: "flex", justifyContent: "space-between", gap: "24px", left: "0", overflow: "hidden", position: "absolute", top: "52px", width: "1452px" }}>
                    <MainMainContent
                        content="recent-searches"
                        ellipse="image.png"
                        hover={false}
                        text="Beyonce"
                        xUnion="image.svg"
                    />
                    <MainMainContent
                        content="recent-searches"
                        ellipse="ellipse-9-2.png"
                        hover={false}
                        text="Cardi B"
                        xUnion="union-2.svg"
                    />
                    <MainMainContent
                        content="recent-searches"
                        ellipse="ellipse-9-3.png"
                        hover={false}
                        text="Diana Ross"
                        xUnion="union-3.svg"
                    />
                    <MainMainContent
                        content="recent-searches"
                        ellipse="ellipse-9-4.png"
                        hover={false}
                        text="Usher"
                        xUnion="union-4.svg"
                    />
                    <MainMainContent
                        content="recent-searches"
                        ellipse="ellipse-9-5.png"
                        hover={false}
                        text="Charlie Puth"
                        xUnion="union-5.svg"
                    />
                    <MainMainContent
                        content="recent-searches"
                        ellipse="ellipse-9-6.png"
                        hover={false}
                        text="Marvin Gaye"
                        xUnion="union-6.svg"
                    />
                    <MainMainContent
                        content="recent-searches"
                        ellipse="ellipse-9-6.png"
                        hover={false}
                        text="Marvin Gaye"
                        xUnion="union-6.svg"
                    />
                    <MainMainContent
                        content="recent-searches"
                        ellipse="ellipse-9-6.png"
                        hover={false}
                        text="Marvin Gaye"
                        xUnion="union-6.svg"
                    />
                </div>
            </div>
        </div>
    );
};
export default ProfileArtist;