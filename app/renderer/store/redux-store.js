import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/root-reducer';
import DevTools from '../containers/dev-tools';

export const history = createHistory();
const middleware = routerMiddleware(history);

/**
 * Store setup when running in dev-mode
 * @param initialState
 */
function configureDevStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware),
            DevTools.instrument()
        )
    );
}

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
    if(process.env.NODE_ENV === 'development') {
        return configureDevStore(initialState);
    } else {
        return configureProdStore(initialState);
    }
}