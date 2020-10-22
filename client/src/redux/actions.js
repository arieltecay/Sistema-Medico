import axios from "axios";
import * as C from './constants'
axios.defaults.withCredentials = true;

// aca van los actions del GET
export function getPacientes() {
    return function (dispatch) {
        axios.get(`${C.SERVER_ADDRESS}/pacientes`)
            .then((res) => { dispatch({ type: C.GET_PACIENTES, payload: res.data }) })
            .catch((error) => alert(error, "error"));
    }
}

// aca van los actions del POST/CREATE




// aca van los actions del UPDATE/MODIFICAR




// aca van los actions del DELETE/REMOVE
