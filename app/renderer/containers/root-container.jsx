import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import DevTools from 'redux-devtools/src/createDevTools';
import App from '../components/app';

function devComponents() {
    if(process.env.NODE_ENV === 'development') {
        return (
            <DevTools />
        )
    } else {
        return (
            <div className="no-op"></div>
        )
    }
}

/**
 * Creates a root node dependent on configuration
 * @param store
 * @param history
 * @constructor
 */
export default function Root({store, history}) {
    return (
        <Provider store = {store}>
            <div>
                <ConnectedRouter history={history}>
                    <Route path="/" component={App} />
                </ConnectedRouter>
                {devComponents()}
            </div>
        </Provider>
    )
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};