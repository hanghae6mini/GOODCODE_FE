import axios from "axios";

const SIGNUP = "signUp/SIGNUP";

function signUp(payload) {
    return { type: SIGNUP, payload: payload}
  };




export const __SignUp =
  (signup) =>
  async (dispatch, getState, { history }) => {
    //네트워크 요청
    console.log(signup)
    await axios
      .post("http://3.36.89.94/api/user/signup", signup)
      .then(() => {
        console.log();
        window.alert("회원가입 완료");
        history.replace("/");
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  const initialState = {
    userid: "",
    nickname: "",
    password: "",
    validPassword: ""
  };


const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP:
        return {
          ...state,
          userid: this.state.userid,
          nickname: this.state.nickname,
          password: this.state.password,
          validPassword: this.state.validPassword
        };
          default:
          return state;
    };
  };

  export default signUpReducer;

//   구현하고자 했던 것.
//  

