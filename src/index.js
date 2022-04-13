import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import thunk from "redux-thunk";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from './redux/module';
import { history } from './redux/module';

import { BrowserRouter } from 'react-router-dom';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ history })))
  );

ReactDOM.render(
        <App/>,
document.getElementById("root"));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>)


