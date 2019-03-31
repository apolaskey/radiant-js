import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router";
import Notifier from '../actors/notification-actor';

/**
 * Any-and-all reducers to be used in the application
 * @type {Reducer<any>}
 */
export default (history) => combineReducers({
    router: connectRouter(history),
    Notifier
});
