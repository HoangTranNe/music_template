import React from "react";
import styled from "styled-components";

const StyledX = styled.div`
  height: 16px;
  width: 16px;

  & .overlap-group {
    border-radius: 8px;
    height: 16px;
    position: relative;
  }

  & .ellipse {
    background-color: var(--secondarysecondary-01);
    border-radius: 8px;
    height: 16px;
    left: 0;
    opacity: 0.6;
    position: absolute;
    top: 0;
    width: 16px;
  }

  & .union {
    height: 8px;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 8px;
  }
`;

const X = () => {
  return (
    <StyledX>
      <div className="overlap-group">
        <div className="ellipse" />
        <img className="union" alt="Union" src="union.svg" />
      </div>
    </StyledX>
  );
};
export default X;
