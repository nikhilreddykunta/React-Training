import {INCREMENT, DECREMENT, UPDATE_NAME} from './constants';

//"action creators"- functions that returns "actions" i.e., objects representing actions in the app

function incrementAC() {
    return {
        type: INCREMENT
    }
}

function decrementAC() {
    return {
        type: DECREMENT
    }
}

function updateNameAC(name) {
    return {
        type: UPDATE_NAME,
        payload: {
            name: name
        }
    }
}

export {
    incrementAC,
    decrementAC,
    updateNameAC
};