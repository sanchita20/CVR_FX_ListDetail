import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducerData from './reducer/Reducer';
import Main from './Main';
import './styles/style.scss';

const store = createStore(reducerData, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Main />,
  </Provider>,
  document.getElementById('root')
)

