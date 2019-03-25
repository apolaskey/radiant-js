import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/root-reducer';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

/**
 * Store setup when running in prod-mode
 * @param initialState
 */
function configureProdStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
}

/**
 * Configure active store based upon env-vars
 * @param initialState
 */
export function configureStore(initialState) {
    return configureProdStore(initialState);
}
