import React from "react";
import styled from "styled-components";
import Header from "../Header";

function Container() {
  const StyledContainer = styled.div`
  baground: rgb(247, 247, 249)
    width: 1380px;
    padding: 30px 165px;
  `;
  return (
    <StyledContainer>
      <Header></Header>
    </StyledContainer>
  );
}

export default Container;
