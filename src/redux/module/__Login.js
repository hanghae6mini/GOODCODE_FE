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
      // dispatch(login({ userId: userId, password: password }));

      await axios.get("http://3.36.89.94/api/user/auth", { headers: { 'Authorization': `Bearer ${token}` } })
      .then(() => {
        window.alert("로그인 성공");
        history.push("/main");
      })
      .catch(() => {
        window.alert("로그인 실패.")
      } )
      ;
       
    };





// reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        userId: action.payload.userId,
        password: action.payload.password,
      };
    default:
      return state;
  };
// main render
};



export default loginReducer;