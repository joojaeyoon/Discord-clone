import React, { useState } from "react";
import styled from "styled-components";
import { Mic } from "./mic";

import logo from "./imgs/discord-logo.png";

const ChannelList = props => {
  const { username, joinRoom, leaveRoom, voiceroom, sendBlob } = props;
  const [isJoined, setJoined] = useState(false);

  const users = voiceroom.map((user, index) => (
    <VoiceDiv key={index}>
      <img
        src={logo}
        style={{ width: "30px", height: "30px", marginRight: "10px" }}
        alt="voicelogo"
      />
      {user}
    </VoiceDiv>
  ));

  return (
    <ChannelDiv>
      <ChannelNameDiv>Discord-server</ChannelNameDiv>
      <ChatChannelDiv>
        <ChannelButton># 자유채팅1</ChannelButton>
      </ChatChannelDiv>
      <ChatChannelDiv>
        <ChannelButton
          style={{ color: isJoined ? "white" : "#8e9297" }}
          onClick={() => {
            if (!isJoined) joinRoom("Voice");
            else leaveRoom("Voice");

            setJoined(!isJoined);
          }}
        >
          <span role="img" aria-label="speaker">
            🔊
          </span>{" "}
          음성채널
        </ChannelButton>
        {users}
      </ChatChannelDiv>
      <Mic sendBlob={sendBlob} />
      <UserDiv>
        <img
          src={logo}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            width: "40px",
            height: "40px"
          }}
          alt="userlogo"
        />
        {username}
      </UserDiv>
    </ChannelDiv>
  );
};

const VoiceDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 10px;
`;

const ChannelNameDiv = styled.div`
  border-bottom: solid;
  border-bottom-color: #232527;
  border-bottom-width: 1px;
  text-align: left;
  height: 50px;
  margin-left: 10px;
  font-size: 20px;
`;

const ChannelButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  height: 40px;
  width: 230px;
  color: #8e9297;
  font-size: 16px;
  font-weight: 200;
  text-align: left;
  :hover {
    background-color: #393c43;
  }
`;

const UserDiv = styled.div`
  background-color: #292b2f;
  font-weight: 600;
  text-align: left;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
`;

const ChatChannelDiv = styled.div`
  color: #8e9297;
  margin-top: 10px;
  margin-left: 10px;
  text-align: left;
`;

const ChannelDiv = styled.div`
  background-color: #2f3136;
  position: relative;
  color: white;
  width: 290px;
  border-top-left-radius: 10px;
`;

export default ChannelList;
