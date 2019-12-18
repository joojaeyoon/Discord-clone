import React from "react";
import styled from "styled-components";
import logo from "../discord-logo.png";

const Menubar = () => {
  return (
    <MenubarDiv>
      <img src={logo} className="menu-logo" alt="logo" />
      <MenulineDiv>-</MenulineDiv>
      <img src={logo} className="menu-logo" alt="logo" />
      <img src={logo} className="menu-logo" alt="logo" />
    </MenubarDiv>
  );
};

const MenubarDiv = styled.div`
  align-items: center;
  min-width: 80px;
  max-width: 100px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const MenulineDiv = styled.div`
  font-weight: 500;
  font-size: 30px;
`;
export default Menubar;
