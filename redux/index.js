import { combineReducers, createStore } from 'redux';
import shop from './shop';

const rootReducer = combineReducers({ shop });

export const initializeStore = () => createStore(rootReducer);

export default rootReducer;