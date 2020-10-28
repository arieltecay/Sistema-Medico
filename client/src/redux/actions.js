import axios from "axios";
import * as C from './constants'
axios.defaults.withCredentials = true;

// aca van los actions del GET
export function getPacientes() {
    return function (dispatch) {
        axios.get(`${C.SERVER_ADDRESS}/paciente`)
            .then((res) => { dispatch({ type: C.GET_PACIENTES, payload: res.data }) })
            .catch((error) => alert(error, "error"));
    }
}

// aca van los actions del POST/CREATE
export function createPaciente(values) {
    console.log(values);
    return function (dispatch) {
        axios.post(`${C.SERVER_ADDRESS}/paciente/`, values)
            .then((res) => { dispatch({ type: C.CREATE_PACIENTE, payload: res.data }) })
            .catch((error) => alert(error, "error"));
    }
}
// aca van los actions del UPDATE/MODIFICAR




// aca van los actions del DELETE/REMOVE