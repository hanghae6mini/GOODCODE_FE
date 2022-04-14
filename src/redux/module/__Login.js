import axios from "axios";
import { actionCreators as FeedActions } from '../modules/feed'
// import Cookies from "universal-cookie";
// import jwt_decode from "jwt-decode";

// const cookies = new Cookies();

// action
const LOGIN = "login/LOGIN";

const initialState = {
  isLogin: false,
  userId: "",
  nickname: "",
  password: "",
};

// action creator
function login(payload) {
  return { type: LOGIN, payload: payload };
};

// Thunk
export const __Login =
  (paylaod) =>
    async (dispatch, getState, { history }) => {

      let token = ''

      axios.post("http://3.36.89.94/api/user/login", { userId: paylaod.userId, password: paylaod.password })
        .then((res) => {
          token = res.data.token
          localStorage.setItem('token', token)
          window.alert("로그인 성공");
          history.push("/main");
          window.location.reload()
          // dispatch(login({ userId: res.data.userId, nickname: res.data.nickname }))
        })
        .catch((error) => { console.log(error.response.data) })

      // cookies.set("myJwt", token, { path: "/" });
      // const { userId, password } = jwt_decode(token);
      // cookies.set("userId", userId, { path: "/" });
      // cookies.set("password", password, { path: "/" });

      // 리덕스로 2차 dispatch
      // dispatch(login(paylaod));

    };


export const auth = () => {
  return async function (dispatch, getState, { history }) {

    const token = localStorage.getItem('token')

    axios.get("http://3.36.89.94/api/user/auth", { headers: { 'Authorization': `Bearer ${token}` } })
      .then((res) => {
        dispatch(login({ userId: res.data.userId, nickname: res.data.nickname }))
      })
  }
}




// reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        nickname: action.payload.nickname,
        userId: action.payload.userId,
      };
    default:
      return state;
  };
  // main render
};



export default loginReducer;