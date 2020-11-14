import * as actionTypes from '../actions/actionTypes';
import updeteObject from '../utility';

const initialState = {
    counter: 0 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT :
            const newState = Object.assign({}, state);
            newState.counter = state.counter +1
            return  newState;
            
        case actionTypes.DECREMENT :
            return {
                ...state, // nowy stan, nie należy manipulować stanem, klonujemy go
                counter: state.counter - 1
                }
        case actionTypes.ADD :
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT :
            return updeteObject(state, {counter: state.counter + action.val});  // utility function alternatywa dla poprzednich, good practise - ale nie konieczna
    }
    return state;
}; 

export default reducer;