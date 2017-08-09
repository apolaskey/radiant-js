/* eslint-disable no-unused-vars */
/**
 * This file is to kick-off the renderer process for Electron (or other GUI)
 */
import shellStyles from './css/main.scss';
import manifest from '../package.json';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { configureStore, history } from './renderer/store/redux-store';
import Root from './renderer/containers/root-container';

if(process.env.NODE_ENV === 'development') {
    AppContainer.prototype.unstable_handleError = function(e) {
        throw e;
    }
}

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
