import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

const StyledLogo = styled.img`
  width: 110px;
  height: 36px;
`;

StyledLogo.defaultProps = {
  src: logo,
};

const StyledLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: rgb(30, 37, 94);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
`;

const StyledButton = styled.button`
  margin-left: 20px;
  width: 130px;
  height: 42px;
  border-radius: 100px;
  background: rgb(60, 78, 243);
  color: rgb(255, 255, 255);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  border: none;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo></StyledLogo>
      <StyledLinks>
        <StyledLink href="#">Home</StyledLink>
        <StyledLink href="#">About us</StyledLink>
        <StyledLink href="#">How it works</StyledLink>
        <StyledLink href="#">Services</StyledLink>
        <StyledLink href="#">Contact</StyledLink>
        <StyledButton>Get Started</StyledButton>
      </StyledLinks>
    </StyledNavbar>
  );
};

export default Navbar;
