import {applyMiddleware, combineReducers, createStore} from 'redux';
import {toysReducer} from './toys/toys.reducer';
import thunk from 'redux-thunk';
import {inputsReducer} from './inputs/inputs.reducer';

const rootReducer = combineReducers({
  toys: toysReducer,
  inputs: inputsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
