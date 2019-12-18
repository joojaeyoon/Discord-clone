import React from "react";

import Chats from "./Chats";
import ChannelList from "./ChannelList";
import UserList from "./UserList";
import styled from "styled-components";

const Channel = () => {
  return (
    <ChannelDiv className="Channel">
      <ChannelList />
      <Chats />
      <UserList />
    </ChannelDiv>
  );
};

const ChannelDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default Channel;
