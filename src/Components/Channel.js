import React, { useState, useRef } from "react";

import Chats from "./Chats";
import ChannelList from "./ChannelList";
import UserList from "./UserList";
import styled from "styled-components";

const Channel = () => {
  const input = useRef();
  const [username, setUsername] = useState("");

  return username === "" ? (
    <NameDiv>
      <div style={{ margin: "5vh" }}>Enter Channel</div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setUsername(input.current.value);
        }}
      >
        <NameInput ref={input} placeholder="your name" />
        <div>
          <NameButton>Enter</NameButton>
        </div>
      </form>
    </NameDiv>
  ) : (
    <ChannelDiv>
      <ChannelList />
      <Chats username={username} />
      <UserList />
    </ChannelDiv>
  );
};

const NameButton = styled.button`
  width: 10vh;
  height: 5vh;
  margin-top: 5vh;
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
