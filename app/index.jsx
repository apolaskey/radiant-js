/* eslint-disable no-unused-vars */
/**
 * This file is to kick-off the renderer process for Electron (or other GUI)
 */
import css from './css/main.scss';
import { hot } from 'react-hot-loader' // Must be above the react dependency to patch correctly
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore, history} from './renderer/store/redux-store';
import Root from './renderer/containers/root-container';

let store = configureStore();

console.log(module);

const render = () => {
    console.log('Loaded application styles:', css !== undefined);
    ReactDOM.render(
        <AppContainer>
            <Root store={store} history={history}/>
        </AppContainer>,
        document.getElementById('app_root')
    );
};

render(Root);

// webpack Hot Module Replacement API
if (module.hot) {
    console.log('Running in hot mode :fire:');
    // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
    // while `hot` would configure HMR for the CURRENT module
    module.hot.accept('./renderer/containers/root-container', () => {
        // if you are using harmony modules ({modules:false})
        render(Root);
        // in all other cases - re-require App manually
        render(require('./renderer/containers/root-container'))
    })
} else {
    console.log('Running in production mode :beer:')
}