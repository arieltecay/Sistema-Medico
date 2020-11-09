import * as C from './constants'
const initialState = {
    pacientes: [],
    paciente: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case C.GET_PACIENTES: {
            return { ...state, pacientes: action.payload }
        }
        case C.GET_PACIENTE: {
            return { ...state, pacientes: action.payload }
        }
        case C.CREATE_PACIENTE: {
            console.log(state);
            return {
                ...state, paciente: state.paciente.concat(action.payload),
            }
        } case C.SEARCH_PACIENTES: {
            return { ...state, pacientes: action.payload }
        }
        case C.UPDATE_PACIENTE:{
            return {...state, paciente: action.payload}
        }
        default: return state;
    }
}
export default rootReducer;