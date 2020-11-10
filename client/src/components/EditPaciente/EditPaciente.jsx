import { Radio } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './editPaciente.css'
import { Button, Modal } from 'react-bootstrap'

export default function MydModalWithGrid(props) {
  const idPaciente = props.datos.id
  const [input, setInput] = useState(null);
  const [selectedValue, setSelectedValue] = useState('b');

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    fetch("http://localhost:3001/paciente/" + idPaciente)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setInput(data);
      });
  }, []);
  console.log(input);
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
            <form className='form' autoComplete='off'>
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
                    name="domicilio"
                    value={input.domicilio}
                    className='ml-3'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='mt-3'>
                  <input
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

              </div>
            </form>
          </div>

          <Modal.Footer>
            <Button className='btn btn-succes'>Save</Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>)
  );
}