import React from "react";
import styled from "styled-components";
import socket from "socket.io-client";

import Chats from "./Chats";
import ChannelList from "./ChannelList";
import UserList from "./UserList";
import InputName from "./InputName";

class Channel extends React.Component {
  state = {
    users: [],
    chats: [],
    username: ""
  };

  constructor(props) {
    super(props);

    this.socket = socket.connect("http://localhost:8080");

    this.socket.on("message", (user, msg, date) => {
      this.addMessage(user, msg, date);
    });

    this.socket.on("addUser", user => {
      this.addUser(user);
    });

    this.socket.on("user disconnect", username => {
      this.delUser(username);
    });

    this.socket.on("getUsers", users => {
      const userList = this.state.users;

      users.map(user => userList.push(user));

      this.setState({
        users: userList
      });
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
    this.socket.emit("enter user", name);

    this.addUser(name);
  };

  addUser = user => {
    const { users } = this.state;
    this.setState({
      users: [...users, user]
    });
  };

  delUser = name => {
    const userList = this.state.users;
    const idx = userList.indexOf(name);
    if (idx === -1) {
      return;
    }

    userList.splice(idx, 1);

    this.setState({
      users: userList
    });
  };

  render() {
    const { username, chats, users } = this.state;

    return username === "" ? (
      <InputName setUsername={this.setUsername} />
    ) : (
      <ChannelDiv>
        <ChannelList />
        <Chats
          sendMessage={this.sendMessage}
          username={username}
          chats={chats}
        />
        <UserList users={users} />
      </ChannelDiv>
    );
  }
}

const ChannelDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default Channel;
