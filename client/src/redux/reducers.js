import * as C from './constants'
const initialState = {
pacientes:[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case C.GET_PACIENTES: {
            return { ...state, pacientes: action.payload }
        }
        default: return state;
    }
}
export default rootReducer;