/**
 * This file is to kick-off the renderer process for Electron (or other GUI)
 */
// @ts-ignore
import css from '../css/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore, history} from './store/redux-store';
import Root from './containers/root-container';
import {hot} from 'react-hot-loader';

let store = configureStore({});

console.log('Redux Store created:', store !== undefined ? ('✔') : ('❌'));
console.log('Loaded application styles:', css !== undefined ? ('🌈') :('🌧️'));

const render = () => {
    ReactDOM.render(
        <Root store={store} history={history}/>,
        document.getElementById('app_root')
    );
};

render();

hot(module)(render);