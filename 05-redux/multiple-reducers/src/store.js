import {createStore, combineReducers} from 'redux';
import counterReducer from './Reducers/counterReducer';
import formReducer from './Reducers/formReducer';

export default createStore(
    combineReducers({
        counter: counterReducer,
        form: formReducer
    })
);
    