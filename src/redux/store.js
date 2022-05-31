import { createStore } from 'redux';
import { reducer } from './reducer';

/*export const store = configureStore({
    reducer: {},
})*/

export const store = createStore(reducer);