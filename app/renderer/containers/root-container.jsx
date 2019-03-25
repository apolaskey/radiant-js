/**
 * This file outlines the root of the application before any component has officially rendered.
 * Think "Main Container" where your actual application is rendered as a child to this.
 */
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import App from '../components/app';

/**
 * Creates a root node dependent on configuration
 * @param store
 * @param history
 * @constructor
 */
export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <div>
                <Router history={history}>
                    <Route path="/" component={App} />
                </Router>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
