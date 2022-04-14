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
      const {
        data: { token },
      } = await axios.post("http://3.36.89.94/api/user/login", paylaod)
      localStorage.setItem('token', token)

      // cookies.set("myJwt", token, { path: "/" });
      // const { userId, password } = jwt_decode(token);
      // cookies.set("userId", userId, { path: "/" });
      // cookies.set("password", password, { path: "/" });

      // 리덕스로 2차 dispatch
      // dispatch(login(paylaod));

      axios.get("http://3.36.89.94/api/user/auth", { headers: { 'Authorization': `Bearer ${token}` } })
        .then((res) => {
          console.log(res)
          history.push("/main");
          window.alert("로그인 성공");
          dispatch(login({ userId: res.data.userId, nickname: res.data.nickname }))
        })
        .catch(() => {
          window.alert("로그인 실패.")
        })
        ;

    };


export const auth = () => {
  return async function (dispatch, getState, { history }) {

    const token = localStorage.getItem('token')

    console.log(token)

    axios.get("http://3.36.89.94/api/user/auth", { headers: { 'Authorization': `Bearer ${token}` } })
      .then((res) => {
        console.log(res)
        dispatch(login({ userId: res.data.userId, nickname: res.data.nickname }))
      })
  }
}




// reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action, action.payload)
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