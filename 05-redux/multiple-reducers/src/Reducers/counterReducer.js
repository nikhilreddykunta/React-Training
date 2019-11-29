import {INCREMENT, DECREMENT} from '../Actions/constants';

export default function counterReducer(curState = {value: 0}, action) {
    let newState;

    switch(action.type) {
        case INCREMENT:
            newState = {value: curState.value+1};
            break;
        
        case DECREMENT:
            newState = {value: curState.value-1};
            break;
        
        default:
            newState = curState;
    }    

    return newState;
}