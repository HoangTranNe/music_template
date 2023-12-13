import React from "react";
import styled from "styled-components";

const StyledPlayScreen = styled.div`
  background-color: var(--secondarysecondary-03);
  border-radius: 8px;
  height: 16px;
  position: relative;
  width: 16px;

  & .vector {
    height: 6px;
    left: 6px;
    position: absolute;
    top: 5px;
    width: 5px;
  }
`;

const PlayScreen = () => {
  return (
    <StyledPlayScreen>
      <img className="vector" alt="Vector" src="vector.svg" />
    </StyledPlayScreen>
  );
};
export default PlayScreen;
