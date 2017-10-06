import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import Notifier from '../actors/notification-actor';

/**
 * Any-and-all reducers to be used in the application
 * @type {Reducer<any>}
 */
const rootReducer = combineReducers({
    Notifier
});

export default rootReducer;
