import React from "react";
import styled from "styled-components";
import phone from "../../assets/phone.png";
import googlePlay from "../../assets/googlePlay.svg";
import appStore from "../../assets/appStore.svg";

const StyledgooglePlay = styled.img``;
StyledgooglePlay.defaultProps = {
  src: googlePlay,
};
const StyledappStore = styled.img``;
StyledappStore.defaultProps = {
  src: appStore,
};
const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDivFlex = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;
const StyledH1 = styled.h1`
  width: 540px;
  color: rgb(30, 37, 94);
  font-family: Poppins;
  font-size: 64px;
  font-weight: 700;
  line-height: 96px;
`;
const StyledPhone = styled.img`
  width: 700px;
  height: 600px;
`;
StyledPhone.defaultProps = {
  src: phone,
};
const Styledp = styled.p`
  width: 403.95px;
  color: rgba(30, 37, 94, 0.7);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  background: rgb(107, 112, 145);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: rgb(60, 78, 243);
`;
function Hero() {
  return (
    <StyledHero>
      <div>
        <StyledH1>Connecting all your banking needs</StyledH1>
        <Styledp>
          A smart mobile application you can control your business needs
        </Styledp>
        <StyledDivFlex>
          <StyledButton>
            <StyledappStore></StyledappStore>
            Download App
          </StyledButton>
          <StyledButton>
            <StyledgooglePlay></StyledgooglePlay>
            Download App
          </StyledButton>
        </StyledDivFlex>
      </div>
      <div>
        <StyledPhone />
      </div>
    </StyledHero>
  );
}
export default Hero;
