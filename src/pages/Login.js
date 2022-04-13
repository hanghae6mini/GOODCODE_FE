import React, { useState } from "react";
import styled from "styled-components";

import LsGrid from "../elements/LsGrid";
import LsButton from "../elements/LsButton.js";
import LsInput from "../elements/LsInput.js";
import LsText from "../elements/LsText";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __Login } from "../redux/module/__Login";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {userInfo, setUserInfo} = useState({
    userid: "",
    password: ""
  })

  const [userid, setuserid]= useState();
  const [password, setpassword] = useState();



  const onChangeInput = (e) => {
    const { value, name } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    })

  }

  const login = () => {
    if (userid === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    dispatch(__Login({
      userId: userid,
      password: password,
      }));
  }




  return (
    <>
      <LsGrid padding="180px 0 0 0">
        <form onSubmit={(e) => {
          e.preventDefault();
          dispatch(__Login(userInfo));
        }}>
          <LsText size="30px" bold="600">로그인</LsText>
          <InputBox>
          <LsText>아이디</LsText>
            <LsInput type="text" name="userid" _onChange={(e) => {
                  setuserid(e.target.value);
                }}/>
          </InputBox>
          <InputBox>
          <LsText>비밀번호</LsText>
            <LsInput type="password" name="password" _onChange={(e) => {
                  setpassword(e.target.value);
                }} />
          </InputBox>
          <Btns>
            <LsButton _onClick={login} text="로그인" />
            <LsButton
              btnName="cancle"
              text="회원가입으로 이동"
              _onClick={() => history.push("/signUp")}
            />
          </Btns>
        </form>
      </LsGrid>
    </>
  );
};

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

export default Login;