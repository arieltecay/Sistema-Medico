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
export function getPaciente(pacienteId) {
  return function (dispatch) {
    axios.get(`${C.SERVER_ADDRESS}/paciente/${pacienteId}`)
      .then((res) => { dispatch({ type: C.GET_PACIENTE, payload: res.data }) })
      .catch((error) => alert(error, "error"));
  }
}

export function searchPacientes(value) {
  return function (dispatch) {
    axios.get(`${C.SERVER_ADDRESS}/paciente/search/?query=${value}`)
      .then((res) => { dispatch({ type: C.SEARCH_PACIENTES, payload: res.data }) })
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
export function updatePaciente(idPaciente, paciente) {
  console.log(paciente);
  return function (dispatch) {
    axios.put(`${C.SERVER_ADDRESS}/paciente/${idPaciente}`, paciente)
      .then((res) => { dispatch({ type: C.UPDATE_PACIENTE, payload: paciente }) })
      .then(() => console.log("Modificado OK"))
      .catch((error) => alert(error, "error"));
  }
}
/* export function updatePaciente(pacienteId, paciente) {
  console.log(paciente);
    return function (dispatch) {
      axios.put(`${C.SERVER_ADDRESS}/paciente/${pacienteId}`, paciente)
        .then((res) => { dispatch({ type: C.UPDATE_PACIENTE, payload: paciente }) })
        .then(() => console.log("Se modifico el producto"))
        .catch((error) => alert(error, "error"));
    }
  } */



// aca van los actions del DELETE/REMOVE
