import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appState from './app-state-reducer';

/**
 * Any-and-all reducers to be used in the application
 * @type {Reducer<any>}
 */
const rootReducer = combineReducers({
    appState
});

export default rootReducer;