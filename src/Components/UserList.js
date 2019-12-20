import React from "react";
import styled from "styled-components";
import logo from "./imgs/discord-logo.png";

const User = ({ user }) => {
  return (
    <UserDiv>
      <UserImg src={logo} alt="userimg" />
      <UserName>{user}</UserName>
    </UserDiv>
  );
};

const UserList = props => {
  const { users } = props;

  const userList = users.map((user, index) => <User key={index} user={user} />);

  return (
    <UserListDiv>
      <OnlineDiv>Online - {users.length}</OnlineDiv>
      {userList}
    </UserListDiv>
  );
};

const OnlineDiv = styled.div`
  text-align: left;
  margin-left: 20px;
  color: #8e9297;
  font-size: 14px;
`;

const UserName = styled.span`
  margin-left: 10px;
`;

const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 10px;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
`;

const UserListDiv = styled.div`
  background-color: #2f3136;
  padding-top: 30px;
  width: 20%;
  color: white;
`;

export default UserList;
