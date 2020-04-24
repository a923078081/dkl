import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import User from './page/user';
import {HTTP_GET,HTTP_POST,HTTP_FILE,HTTP_SJL,HTTP_ALL} from './server/request'
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/reset.css'
import './assets/css/public.css'
import './assets/css/icon.css'
React.$axiosGet=HTTP_GET
React.$axiosPost=HTTP_POST
React.$axiosFile=HTTP_FILE
React.$axiosSJL=HTTP_SJL
React.$axiosALL=HTTP_ALL
ReactDOM.render(
    <Provider store={store}>
    <User />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
