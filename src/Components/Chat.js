import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../discord-logo.png";
import useSocket from "use-socket.io-client";

const Chat = () => {
  let input;

  const [socket] = useSocket("http://localhost:3000");

  socket.connect();

  useEffect(() => {
    socket.on("chat message", msg => {
      console.log(msg);
    });
  });

  return (
    <MainDiv>
      <ChatMenu>Chat Menu</ChatMenu>
      <InnerDiv>
        <ChatDiv>
          <img src={logo} className="App-logo" alt="logo" />
        </ChatDiv>
        <ChatForm
          onSubmit={e => {
            e.preventDefault();
            socket.emit("chat message", input.value);
            input.value = "";
          }}
        >
          <ChatInput
            ref={ref => {
              input = ref;
            }}
            placeholder="Send Message"
          />
        </ChatForm>
      </InnerDiv>
    </MainDiv>
  );
};

const ChatForm = styled.form`
  height: 10%;
`;

const ChatInput = styled.input`
  background-color: #40444b;
  border-radius: 5px;
  margin-left: 5%;
  margin-bottom: 5%;
  border-style: none;
  width: 90%;
  min-height: 5vh;
  color: white;
  text-indent: 1vh;
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
