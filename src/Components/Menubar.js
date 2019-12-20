import React from "react";
import styled from "styled-components";
import logo from "../discord-logo.png";
import react_logo from "./imgs/react.png";
import socket_logo from "./imgs/socket.png";
import mongo_logo from "./imgs/mongo.png";
import graphql_logo from "./imgs/graphql.png";

const Menubar = () => {
  return (
    <MenubarDiv>
      <Image src={logo} alt="logo" />
      <MenulineDiv>-</MenulineDiv>
      <Image src={react_logo} alt="react_logo" />
      <Image src={socket_logo} alt="socket.io_logo" />
      <Image src={mongo_logo} alt="mongo_logo" />
      <Image src={graphql_logo} alt="graphql_logo" />
    </MenubarDiv>
  );
};

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 3vh;
  background-color: white;
  border-radius: 15px;
`;

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

  margin-bottom: 3vh;
`;
export default Menubar;
