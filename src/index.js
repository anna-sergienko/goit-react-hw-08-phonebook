import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { Provider } from 'react-redux';
import {ToastContainer } from 'react-toastify';
import {store} from './redux/store'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={2000}/>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);