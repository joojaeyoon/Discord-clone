import React from "react";
import styled from "styled-components";
import socket from "socket.io-client";

import Chats from "./Chats";
import ChannelList from "./ChannelList";
import UserList from "./UserList";

class Channel extends React.Component {
  state = {
    users: [],
    chats: [{ user: "joo", text: "test" }],
    username: ""
  };

  constructor(props) {
    super(props);

    this.socket = socket.connect("http://localhost:8080");

    this.socket.on("message", (user, msg, date) => {
      this.addMessage(user, msg, date);
    });
  }

  addMessage = (user, msg, date) => {
    const { chats } = this.state;
    this.setState({
      chats: [...chats, { user: user, text: msg, date: date }]
    });
  };

  sendMessage = (user, msg) => {
    const date = Date();
    this.socket.emit("message", user, msg);

    this.addMessage(user, msg, date);
  };

  setUsername = name => {
    this.setState({
      username: name
    });
    this.socket.emit("username", name);
  };

  render() {
    let input;
    const { username, chats } = this.state;

    return username === "" ? (
      <NameDiv>
        <div style={{ margin: "5vh" }}>Enter Channel</div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.setUsername(input.value);
          }}
        >
          <NameInput
            ref={ref => {
              input = ref;
            }}
            placeholder="your name"
          />
          <div>
            <NameButton>Enter</NameButton>
          </div>
        </form>
      </NameDiv>
    ) : (
      <ChannelDiv>
        <ChannelList />
        <Chats
          sendMessage={this.sendMessage}
          username={username}
          chats={chats}
        />
        <UserList />
      </ChannelDiv>
    );
  }
}

const NameButton = styled.button`
  width: 10vh;
  height: 5vh;
  margin-top: 5vh;
  border-radius: 10px;
`;

const NameInput = styled.input`
  height: 5vh;
  text-indent: 1vh;
`;

const NameDiv = styled.div`
  background-color: #36393f;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

const ChannelDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default Channel;
