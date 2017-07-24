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
import {AppContainer} from 'react-hot-loader';
import * as logger from 'winston';

logger.Logger('info', 'Starting React routing sequence...');

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('app_root')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        render(Root);
    });
}
