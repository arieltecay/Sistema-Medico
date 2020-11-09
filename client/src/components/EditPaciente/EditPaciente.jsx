import React, { useState, useEffect } from 'react'
import './editPaciente.css'
import { Button, Modal } from 'react-bootstrap'

export default function MydModalWithGrid(props) {
  const idPaciente = props.datos.id
  const [input, setInput] = useState(null);
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
      <div>
        <Modal className='container' {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <p>Editar Paciente</p>
            </Modal.Title>
          </Modal.Header>
          <div>
            <form autoComplete='off'>
              <div>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="DNI"
                    value={input.DNI}
                    onChange={handleInputChange}
                  />
                </div>
                <div></div>

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