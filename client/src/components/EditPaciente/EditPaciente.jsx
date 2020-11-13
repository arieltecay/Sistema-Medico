import { Radio } from '@material-ui/core'
import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch'
import { Redirect } from "react-router";
import { useDispatch } from 'react-redux';
import './editPaciente.css'
import {  Modal } from 'react-bootstrap'
import { updatePaciente } from '../../redux/actions'

export default function MydModalWithGrid(props) {
  const idPaciente = props.datos.id
  const dispatch = useDispatch();
  const [selectedValue] = useState();
  const [editar, setEditar] = useState(false)
  
  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  const {input, setInput} = useFetch("http://localhost:3001/paciente/" + idPaciente); //Custom HOOK

  function sendPaciente(e, input) {
    e.preventDefault();
    dispatch(updatePaciente(idPaciente, input))
  }
  if (editar) {
    return <Redirect to="/updateOk"/>;
  }


  return (
    input && (
      <div >
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" >
          <Modal.Header closeButton>
            <Modal.Title className='editar' id="contained-modal-title-vcenter">
              <p >Editar Paciente</p>
            </Modal.Title>
          </Modal.Header>
          <div >
            <form
              className='form'
              autoComplete='off'
              onSubmit={(e) => {
                sendPaciente(e, input);
                setTimeout(function () {
                  setEditar(true);
                }, 50);
              }}
            >
              <div >
                <div>
                  <input
                    type="text"
                    placeholder='Nombre'
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder='Apellido'
                    name="lastName"
                    value={input.lastName}
                    onChange={handleInputChange}
                    className='ml-3'
                  />
                  <input
                    type="text"
                    placeholder='DNI'
                    name="DNI"
                    value={input.DNI}
                    className='ml-3'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='mt-3'>
                  <input
                    type="text"
                    placeholder='E-Mail'
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="number"
                    placeholder='Celular'
                    name="celular"
                    value={input.celular}
                    onChange={handleInputChange}
                    className='ml-3'
                  />
                  <input
                    type="text"
                    placeholder='Domicilio'
                    name="direccion"
                    value={input.direccion}
                    className='ml-3'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='mt-3'>
                  <input
                    className='date'
                    type="date"
                    name="birthday"
                    value={input.birthday}
                    onChange={handleInputChange}
                  />
                  <input
                    type="number"
                    placeholder='N° de Socio'
                    name="nSocio"
                    value={input.nSocio}
                    onChange={handleInputChange}
                    className='ml-3'
                  />
                  <div className='radio pt-3'>

                    <Radio
                      checked={selectedValue === 'a'}
                      onChange={handleInputChange}
                      color="primary"
                      name="genero"
                      value="a"
                      label="Male"
                      inputProps={{ 'aria-label': 'A' }}
                    />Masculino
                     <Radio
                      checked={selectedValue === 'b'}
                      onChange={handleInputChange}
                      color="primary"
                      value="b"
                      label="Male"
                      name="genero"
                      inputProps={{ 'aria-label': 'B' }}
                    />Femenino
                    <Radio
                      checked={selectedValue === 'c'}
                      onChange={handleInputChange}
                      color="primary"
                      value="c"
                      label="Male"
                      name="genero"
                      inputProps={{ 'aria-label': 'C' }}
                    />Otro
                  </div>
                  <div className='boton'>
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      Editar
            </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div >)


  );
}