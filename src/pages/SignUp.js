import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { Ls_Input, Ls_Button, Ls_Text, Ls_Grid } from "../elements/ls_index";

import { __SignUp } from "../redux/module/__SignUp";

// import { useDispatch } from "react-redux";
// import { actionCreators as registerAction } from "../redux/module/user";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    userid: "",
    nickname: "",
    password: "",
    validPassword: "",
  })

  const [userid, setuserid] = useState('');
  const [nickname, setnickname] = useState('');
  const [password, setpassword] = useState('');
  const [validPassword, setvalidPassword] = useState('');

  // const correctuserid ="" ;
  // const correctnickname ="" ;
  // const correctpassword ="" ;
  // const correctvalidPassword ="" ;


  const signup = () => {


    if (userid === "" || nickname === "" || password === "" || validPassword === "") {
      window.alert("빈칸을 채워주세요.");
      return;
    };

    if (password !== validPassword) {
      window.alert("비밀번호가 일치하지 않습니다.")
    };

    // 정규 표현식
    // if( userid !== correctuserid ) {

    // };

    // if ( nickname !== correctnickname ) {

    // };

    // if ( password !== correctpassword ) {

    // };

    // if ( validPassword !== correctvalidPassword ) {

    // }



    dispatch(__SignUp({
      userId: userid,
      nickname: nickname,
      password: password,
      validPassword: validPassword
    }))




  };
  return (
    <>
      <Ls_Grid padding="100px 0 0 0">
        <Ls_Text size="30px" bold="600">회원가입</Ls_Text>
        <form onSubmit={(e) => {
        }}>
          <InputBox>
            <Ls_Text>아이디</Ls_Text>
            <Ls_Input
              name="userid"
              placeholder="아이디를 입력하세요."
              type="text"
              _onChange={(e) => {
                setuserid(e.target.value);
              }}
            />
          </InputBox>
          <InputBox>
            <Ls_Text>닉네임</Ls_Text>
            <Ls_Input
              name="nickname"
              placeholder="닉네임을 입력하세요."
              type="text"
              _onChange={(e) => {
                setnickname(e.target.value);
              }}
            />
          </InputBox>
          <InputBox>
            <Ls_Text>비밀번호</Ls_Text>
            <Ls_Input
              name="password"
              placeholder="비밀번호를 입력하세요."
              type="password"
              _onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </InputBox>
          <InputBox>
            <Ls_Text>재확인</Ls_Text>
            <Ls_Input
              name="validPassword"
              placeholder="비밀번호를 다시 입력하세요."
              type="password"
              _onChange={(e) => {
                setvalidPassword(e.target.value);
              }}
            />
          </InputBox>
        </form>
        <Btns>
          <Ls_Button btnName="submit" _onClick={signup} text="회원가입"></Ls_Button>
          <Ls_Button
            btnName="cancle"
            text="돌아가기"
            _onClick={() => history.push("/")}
          ></Ls_Button>
        </Btns>
      </Ls_Grid>
    </>
  )
}


export default SignUp;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const Btns = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
  width: 80%;
  max-width: 300px;
`;