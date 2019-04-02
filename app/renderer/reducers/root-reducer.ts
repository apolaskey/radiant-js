import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router";
import {History} from 'History';
import Notifier from '../actors/notification-actor';

/**
 * Any-and-all reducers to be used in the application
 * @type {Reducer<any>}
 */
const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    Notifier
});

export { rootReducer as default };

export type AppState = ReturnType<typeof rootReducer>