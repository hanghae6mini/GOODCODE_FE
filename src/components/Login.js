import React from "react";
import styled from "styled-components";

import { Text, Input, Grid, Button } from "../elements"

const Login = (props) => {
  return (
    <LogInBox>
      <Grid display="flex" padding="10px">
        <Text size="32px" bold="700">
          로그인
        </Text>

        <Grid padding="10px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => {
              console.log("ID");
            }}
          />
        </Grid>

        <Grid display="flex" padding="10px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={() => {
              console.log("PW");
            }}
          />
        </Grid>
        <Grid display="flex">
        <Button
          text="회원가입하기"
          _onClick={() => {
            console.log("signup clicked");
          }}
        ></Button>
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("login clicked");
          }}
        ></Button>
        </Grid>
      </Grid>
    </LogInBox>
  );
};

export default Login;

const LogInBox = styled.div`
  background: url(https://c.wallhere.com/photos/f0/d4/1920x1080_px_The_Lord_Of_The_Rings_The_Lord_Of_The_Rings_The_Fellowship_Of_The_Ring-654089.jpg!d);
  background-size: cover;
  width: 100vh;
  height: 100vh;
  padding-top: 80px;

`