import React from "react";
import styled from "styled-components";
import logo from "./imgs/discord-logo.png";

const Message = ({ messages }) => {
  return messages.map((message, index) => (
    <div key={index} style={{ marginBottom: "20px" }}>
      <Div>
        <UserImage src={logo} alt="logo" />
        <UserName>
          {message.user}
          <DateTime>{message.date}</DateTime>
        </UserName>
      </Div>
      <UserMessage>{message.text}</UserMessage>
    </div>
  ));
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserMessage = styled.div`
  text-indent: 60px;
  font-size: 18px;
`;

const DateTime = styled.span`
  color: #72767d;
  font-size: 12px;
  margin-left: 10px;
`;

const UserName = styled.span`
  color: #2ec057;
  font-size: 18px;
`;

const UserImage = styled.img`
  border-radius: 30px;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
`;

export default Message;
