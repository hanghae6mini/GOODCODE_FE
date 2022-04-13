import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';

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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
