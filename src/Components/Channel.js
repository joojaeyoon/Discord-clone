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
    voiceroom: [],
    username: ""
  };

  constructor(props) {
    super(props);

    this.socket = socket.connect("http://localhost:8080");

    this.socket.on("message", chat => {
      this.addMessage(chat);
    });

    this.socket.on("addUser", user => {
      this.addUser(user);
    });

    this.socket.on("user disconnect", username => {
      this.delUser(username);
    });

    this.socket.on("voiceUsers", users => {
      this.setState({
        voiceroom: users
      });
    });

    this.socket.on("getUsers", users => {
      const userList = this.state.users;

      users.map(user => userList.push(user));

      this.setState({
        users: userList
      });
    });

    this.socket.on("sendVoice", data => {
      const blob = new Blob([data]);
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
    });
  }

  sendBlob = blob => {
    this.socket.emit("sendBlob", blob);
  };

  joinRoom = room => {
    this.socket.emit("join", room);
  };

  leaveRoom = room => {
    this.socket.emit("leave", room);
  };

  addMessage = chat => {
    const { chats } = this.state;
    this.setState({
      chats: [
        ...chats,
        {
          user: chat.user,
          text: chat.text,
          date: chat.date
        }
      ]
    });
  };

  sendMessage = (user, msg) => {
    this.socket.emit("message", user, msg);
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
    const { username, chats, users, voiceroom } = this.state;

    return username === "" ? (
      <InputName setUsername={this.setUsername} />
    ) : (
      <ChannelDiv>
        <ChannelList
          joinRoom={this.joinRoom}
          leaveRoom={this.leaveRoom}
          username={username}
          voiceroom={voiceroom}
          sendBlob={this.sendBlob}
        />
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
