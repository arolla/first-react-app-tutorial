import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store';

const container = document.getElementById('projet');
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    container
)
