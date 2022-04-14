import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import { api, api_token } from "../../shared/api";

// action type
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_MYLIST = "GET_MYLIST";


// action creat function
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getMyList = createAction(GET_MYLIST, (postList) => ({ postList }));


// initialState
const initialState = {
  user: {},
  postList: [],
  is_login: false,
};

// middleware actions
const loginDB =
  (id, pwd) =>
  async (dispatch, getState, { history }) => {
    await api
      .post(`/user/login`, {
        userId: id,
        password: pwd,
      })
      .then((user) => {
        dispatch(
          setUser({
            nickname: user.data.result.user.nickname,
            userId: user.data.result.user.userId,
            id: user.data.result.user.id,
          })
        );
        const accessToken = "Bearer " + user.data.token;

        setCookie("is_login", `${accessToken}`);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

// const getUserDB =
const registerDB =
  (setId, setPwd, setNickName, setPwdCheck) =>
  async (dispatch, getState, { history }) => {
    await api
      .post(`/user/register`, {
        userId: setId,
        password: setPwd,
        passwordConfirm: setPwdCheck,
        nickname: setNickName,
      })
      .then((res) => {
        window.alert("환영합니다");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

const loginCheckDB =
  () =>
  async (dispatch, getState, { history }) => {
    const token = getCookie("is_login");
    await api_token
      .get(`/`)
      .then((res) => {
        dispatch(
          setUser({
            token: token,
            id: res.data.user.id,
            userId: res.data.user.userId,
            nickname: res.data.user.nickname,
          })
        );
        history.push("/");
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };

const getUserListDB =
  () =>
  (dispatch, getState, { history }) => {
    const accessToken = document.cookie.split("=")[1];
    api
      .get(`/user/entries`, {
        headers: {
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",
          authorization: `${accessToken}`,
        },
      })
      .then((res) => {
        dispatch(getMyList(res.data.entries));
      });
  };

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    window.alert("로그아웃 되었습니다.");
    history.replace("/login");
  };
};



// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [GET_MYLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = action.payload.postList;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = {};
        draft.is_login = false;
      }),
  },
  initialState
);

// actionCreators

const actionCreators = {
  loginDB,
  registerDB,
  logOutDB,
  loginCheckDB,
  getUserListDB,
};

export { actionCreators };