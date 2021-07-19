import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

interface IAction {
  type: string,
  payload?: string
}

const initialState = 0 ;

const reducer = (state = initialState, action: IAction) =>{
  switch(action.type){
    case 'INCREMENTAR':
      return state+1;
    default:
      return state;
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);