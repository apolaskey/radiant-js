import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { routerMiddleware } from 'connected-react-router'
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/root-reducer';

export const history = createBrowserHistory();

/**
 * Store setup when running in prod-mode
 * @param initialState
 */
function configureProdStore(initialState) {
    return createStore(
        rootReducer(history),
        initialState,
        compose(
            applyMiddleware(routerMiddleware),
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
