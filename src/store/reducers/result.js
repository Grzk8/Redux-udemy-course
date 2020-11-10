import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT :
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})   // nie używać push! push zmienia orginalną wartość, contact zwraca nową tablicę - stara + argument;  action i result zwracają nowy stan
                 
            }
        case actionTypes.DELETE_RESULT :
             const updatedArray = state.results.filter( result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray

            }  
    }
    return state;
};

export default reducer;