import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  margin-bottom: 20px;
  letter-spacing: 3px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  border: 1px solid gray;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  height: 40px;
  background-color: #33cc99;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const News = () => {
  return (
    <Container>
      <Title>Subscribe</Title>
      <Desc>Get Timely Update For Your Favorite Products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default News;
