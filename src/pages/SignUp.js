import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {isEmail, isLength, isAlphanumeric} from 'validator';

import styled from "styled-components";
import LsGrid from "../elements/LsGrid";
import LsText from "../elements/LsText";
import LsInput from "../elements/LsInput.js";
import LsButton from "../elements/LsButton.js";

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


  const signup = () => {

     
    if (!isAlphanumeric(userid) || !isLength(userid, { min:4, max:16 })){
      window.alert("아이디는 4~16자의 영문 대소문자와 숫자를 입력해주세요.")
    }
    
    if (!isAlphanumeric(password) || !isLength(password, { min:8, max:16 })){
      window.alert("비밀번호는 8~16자의 영문 대소문자, 숫자를 입력해주세요.")
    }
    
    if (!isAlphanumeric(nickname) || !isLength(nickname, { min:2, max:10 })){
      window.alert("닉네임은 2~10자의 영문 대소문자와 숫자를 입력해주세요.")
    }
    
    if (password !== validPassword) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
    };
    
    if (userid === "" || nickname === "" || password === "" || validPassword === "") {
      window.alert("빈칸을 채워주세요.");
      return;
    };
    
      
      dispatch(__SignUp({
        userId: userid,
        nickname: nickname,
      password: password,
      validPassword: validPassword
    }))

  };



return(
  <>
      <LsGrid padding="140px 0 0 0">
        <LsText size="30px" bold="600">회원가입</LsText>
          <form onSubmit={(e) => {
          }}>
            <InputBox>
            <LsText>아이디</LsText>
              <LsInput

                name="userid"
                placeholder="4~16자의 영문 대소문자와 숫자를 입력."
                type = "text"
                _onChange={(e) => {
                  setuserid(e.target.value);
                }}
              />
            </InputBox>
            <InputBox>
            <LsText>닉네임</LsText>
              <LsInput
                name="nickname"
                placeholder="2~10자의 영문 대소문자와 숫자를 입력."
                type = "text"
                _onChange={(e) => {
                  setnickname(e.target.value);
                  console.log(nickname)
                }}
              />
            </InputBox>
            <InputBox>
            <LsText>비밀번호</LsText>
              <LsInput
                name="password"
                placeholder="8~16자의 영문 대소문자, 숫자, 특수문자를 입력."
                type="password"
                _onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </InputBox>
            <InputBox>
            <LsText>재확인</LsText>
              <LsInput
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
          <LsButton btnName="submit" _onClick={signup} text="회원가입"></LsButton>
          <LsButton
            btnName="cancle"
            text="돌아가기"
            _onClick={() => history.push("/")}
          ></LsButton>
        </Btns>
      </LsGrid>
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