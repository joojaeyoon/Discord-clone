import React from "react";
import styled from "styled-components";

const ChannelList = () => {
  return (
    <ChannelDiv>
      <ChatChannelDiv># 자유채팅1</ChatChannelDiv>
      <ChatChannelDiv># 자유채팅2</ChatChannelDiv>
      <ChatChannelDiv>
        <span role="img" aria-label="speaker">
          🔊
        </span>{" "}
        음성채널
      </ChatChannelDiv>
      <UserDiv>
        Joo
        <span role="img" aria-label="mic">
          🎤
        </span>
        <span role="img" aria-label="headset">
          🎧
        </span>
        <span rolo="img" aria-label="setting">
          ⚙
        </span>
      </UserDiv>
    </ChannelDiv>
  );
};

const UserDiv = styled.div`
  background-color: #29292f;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
`;

const ChatChannelDiv = styled.div`
  color: #8e9297;
  padding-bottom: 3vh;
`;

const ChannelDiv = styled.div`
  background-color: #2f3136;
  position: relative;
  color: white;
  min-width: 13%;
  padding-top: 10vh;
`;

export default ChannelList;
