import React from "react";
import styled from "styled-components";
import socket from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

import "./Chats.css";

const Chat = ({ username, chats }) => {
  return chats.map((chat, index) => (
    <div key={index}>
      {username}: {chat}
    </div>
  ));
};

class Chats extends React.Component {
  state = {
    chats: []
  };

  constructor(props) {
    super(props);

    const { username } = this.props;

    this.socket = socket.connect("http://localhost:8080");

    this.socket.emit("username", username);

    this.socket.on("message", (user, msg) => {
      this.addMessage(user, msg);
      console.log(this.state.chats);
    });
  }

  addMessage = msg => {
    const { chats } = this.state;
    this.setState({
      chats: [...chats, msg]
    });
  };

  render() {
    let input;
    const { username } = this.props;

    return (
      <MainDiv>
        <ChatMenu>Chat Menu</ChatMenu>
        <InnerDiv>
          <ChatDiv>
            <ScrollToBottom className="Scroll">
              <Chat username={username} chats={this.state.chats} />
            </ScrollToBottom>
          </ChatDiv>
          <ChatForm
            onSubmit={e => {
              e.preventDefault();
              this.socket.emit("message", input.value);
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
  }
}

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
  overflow-y: auto;
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

export default Chats;
