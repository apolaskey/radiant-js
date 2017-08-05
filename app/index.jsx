/* eslint-disable no-unused-vars */
/**
 * This file is to kick-off the renderer process for Electron (or other GUI)
 */
import shellStyles from './css/shell.scss';
import splashLaoderStyles from './css/splash-loader.css';
import bubbleBackgroundStyles from './css/bubble-background.css';
import rainboxBackgroundStyles from './css/rainbow-background.css';
import fontAwesomeStyles from './css/font-awesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { configureStore, history } from './renderer/store/redux-store';
import Root from './renderer/containers/root-container';

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Root store={store} history={history}/>
        </AppContainer>,
        document.getElementById('app_root')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./renderer/containers/root-container', () => {
        render(Root);
    });
}
