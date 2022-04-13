import axios from "axios";
// import Cookies from "universal-cookie";
// import jwt_decode from "jwt-decode";

// const cookies = new Cookies();

// action
const LOGIN = "login/LOGIN";


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
    } = await axios.post("http://3.36.89.94/api/user/login", paylaod);
    
    console.log(token);
    
    // cookies.set("myJwt", token, { path: "/" });
    // const { userId, password } = jwt_decode(token);
    // cookies.set("userId", userId, { path: "/" });
    // cookies.set("password", password, { path: "/" });

    // 메인페이지로 이동시킴
    history.push("http://3.36.89.94/api/feed");

    // 리덕스로 2차 dispatch
    // dispatch(login({ userId: userId, password: password }));
  
    axios.get("http://3.36.89.94/api/user/auth", { headers: { 'Authorization': `Bearer ${token}`}}).then((res) => console.log(res) )
  };




const initialState = {
  isLogin: false,
  userId: "",
  password: "",
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
};

// case LOG_OUT:
//   return {};
// default:
//   return state;


export default loginReducer;