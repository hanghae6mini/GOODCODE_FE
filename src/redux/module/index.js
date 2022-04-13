import { __Login } from "./__Login";
import { __SignUp } from "./__SignUp";
import loginReducer from "./__Login";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const rootReducer = combineReducers({
  __Login,
  __SignUp,
  loginReducer,
  router: connectRouter(history),
});

export { history };
export default rootReducer;