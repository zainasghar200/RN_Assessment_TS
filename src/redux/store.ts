import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers';

const rootReducer = combineReducers({dataReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
