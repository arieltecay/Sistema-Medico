import { Radio } from '@material-ui/core'
import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch'
import { Redirect } from "react-router";
import { useDispatch } from 'react-redux';
import './editPaciente.css'
import { Modal } from 'react-bootstrap'
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
  const { input, setInput } = useFetch("http://localhost:3001/paciente/" + idPaciente); //Custom HOOK

  function sendPaciente(e, input) {
    e.preventDefault();
    dispatch(updatePaciente(idPaciente, input))
  }
  if (editar) {
    return <Redirect to="/updateOk" />;
  }

  return (
    input && (
      <div >
        <Modal {...props}  size="lg" aria-labelledby="contained-modal-title-vcenter" >
          <Modal.Header   closeButton>
            <Modal.Title    id="contained-modal-title-vcenter" className='editPaciente'>
              <p >Editar Paciente</p>
            </Modal.Title>
          </Modal.Header>
          <div className='ml-5 '>
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
              <div>
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
                    className='apellido'
                  />
                  <input
                    type="text"
                    placeholder='DNI'
                    name="DNI"
                    value={input.DNI}
                    className='dni'
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder='E-Mail'
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                    className='email'
                  />
                  <input
                    type="number"
                    placeholder='Celular'
                    name="celular"
                    value={input.celular}
                    onChange={handleInputChange}
                    className='celular'
                  />
                  <input
                    type="text"
                    placeholder='Domicilio'
                    name="direccion"
                    value={input.direccion}
                    className='direccion'
                    onChange={handleInputChange}
                  />
                </div>
                <div className=''>
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
                    className='nSocio'
                  />
                  <div className='radio pt-1'>
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