import React from "react";
import styled from "styled-components";

const InputName = props => {
  let input;

  const { setUsername } = props;

  return (
    <NameDiv>
      <div style={{ margin: "5vh" }}>Enter Channel</div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (input.value !== "") setUsername(input.value);
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
  );
};

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
  border-top-left-radius: 15px;
`;

export default InputName;
