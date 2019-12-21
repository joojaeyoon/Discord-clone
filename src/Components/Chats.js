import React from "react";
import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";
import "./Chats.css";

const Chats = props => {
  let input;

  const { sendMessage, username, chats } = props;

  return (
    <MainDiv>
      <ChatMenu>Chat Menu</ChatMenu>
      <InnerDiv>
        <ChatDiv>
          <ScrollToBottom className="Scroll">
            <Message messages={chats} />
          </ScrollToBottom>
        </ChatDiv>

        <ChatForm
          onSubmit={e => {
            e.preventDefault();
            sendMessage(username, input.value);
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
  height: 8vh;
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
  overflow-y: hidden;
`;

const ChatMenu = styled.div`
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #232527;
  min-height: 50px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  margin-top: 10px;
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

export default Chats;
