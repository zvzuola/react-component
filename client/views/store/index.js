import { createStore } from 'redux';
import rootReducers from '../reduces';

export default initialState => createStore(rootReducers, initialState);