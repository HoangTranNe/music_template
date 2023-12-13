import PropTypes from "prop-types";
import React from "react";
import Play  from "./Play.js";
import X from "./X";

const MainMainContent = ({ content, hover, className }) => {
  return (
    <div className={`main-main-content hover-${hover} ${content} ${className}`}>
      {content === "recent-searches" && (
        <>
          <div className="overlap">
            <img className="img" alt="Ellipse" src={!hover ? "ellipse-9.png" : "ellipse-9-2.png"} />
            <div className="frame">
              <div className="text-wrapper">Artist Name</div>
            </div>
            <X className="x-instance" union={hover ? "union-2.svg" : "image.svg"} />
            {hover && <Play className="play-instance" />}
          </div>
          <div className="div-wrapper">
            <div className="div">Artist</div>
          </div>
        </>
      )}

      {["browse-all", "genre"].includes(content) && (
        <>
          <div className="genre-2">
            {content === "genre" && <>Genre 01</>}

            {content === "browse-all" && <>Podcasts</>}
          </div>
          <img
            className="rectangle"
            alt="Rectangle"
            src={content === "browse-all" ? "image.png" : "rectangle-239.png"}
          />
        </>
      )}
    </div>
  );
};


const propTypes = {
    content: PropTypes.oneOf(["browse-all", "recent-searches", "genre"]),
    hover: PropTypes.bool,
};
MainMainContent.propTypes = propTypes;

export default MainMainContent;


