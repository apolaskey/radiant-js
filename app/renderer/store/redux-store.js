import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/root-reducer';

export const history = createHistory();
const middleware = routerMiddleware(history);

/**
 * Store setup when running in prod-mode
 * @param initialState
 */
function configureProdStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware)
    );
}

/**
 * Configure active store based upon env-vars
 * @param initialState
 */
export function configureStore(initialState) {
    return configureProdStore(initialState);
}