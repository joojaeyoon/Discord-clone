import React from "react";
import styled from "styled-components";
import logo from "../discord-logo.png";

const Chat = () => {
  return (
    <MainDiv>
      <ChatMenu>Chat Menu</ChatMenu>
      <InnerDiv>
        <ChatDiv>
          <img src={logo} className="App-logo" alt="logo" />
        </ChatDiv>
        <ChatInput placeholder="Send Message" />
      </InnerDiv>
    </MainDiv>
  );
};

const ChatInput = styled.input`
  background-color: #40444b;
  border-radius: 5px;
  margin-left: 5%;
  margin-bottom: 5%;
  border-style: none;
  width: 90%;
  height: 6%;
`;

const ChatDiv = styled.div`
  height: 90%;
`;

const ChatMenu = styled.div`
  border-bottom-style: solid;
  border-width: 1px;
  border-color: black;
  width: 100%;
  min-height: 8%;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90%;
`;

const MainDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: #36393f;
  min-height: 100vh;
  align-items: left;
  color: white;
  font-size: calc(10px + 2vmin);
`;

export default Chat;
