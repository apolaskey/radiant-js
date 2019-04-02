import {createStore, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'connected-react-router'
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/root-reducer';

export const history = createBrowserHistory();

/**
 * Store setup when running in prod-mode
 * @param initialState
 */
function configureProdStore(initialState: any) {
    return createStore(
        rootReducer(history),
        initialState,
        compose(
            applyMiddleware(routerMiddleware as any),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f
        )
    );
}

/**
 * Configure active store based upon env-vars
 * @param initialState
 */
export function configureStore(initialState: any) {
    return configureProdStore(initialState);
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__ || {};