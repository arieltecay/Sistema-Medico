import React, { useState } from 'react'
import { TextField, Grid, Radio } from '@material-ui/core'
import { useDispatch } from "react-redux";
import { createPaciente } from '../../redux/actions'
import swal from 'sweetalert';
import './addPaciente.css'

export default function () {
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState('b');

    const [datos, setDatos] = useState({
        name: '',
        lastName: '',
        DNI: '',
        email: '',
        celular: '',
        direccion: '',
        genero: '',
        birthday: '',
        nSocio: ''
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        })
        setSelectedValue(e.target.value);
    }

    const cargarDatos = ((datos) => {
        dispatch(createPaciente(datos))
        console.log(dispatch(createPaciente(datos)));
        mostrarAlert()
    })
    const mostrarAlert = () => {
        swal({
            title: "Agregado!",
            text: "Se agregó correctamente!",
            icon: "success",
            button: "OK!",
        });
    }
    
    return (
        <div className="tableBack">
            <Grid container className="row justify-content-center">
                <form  noValidate autoComplete="off">
                    <div className="datosPersonales">
                        <div className="badge badge-primary text-wrap bd-highlight">
                            Agregar Datos Personales
                        </div>
                    </div>
                    <Grid item md={12} className="mb-4">
                        <div>
                            <TextField
                                required
                                className="mr-4"
                                id="outlined-basic"
                                name="name"
                                onChange={handleInputChange}
                                label="Nombre"
                                variant="outlined" />
                            <TextField
                                required
                                id="outlined-basic"
                                className="mr-4"
                                label="Apellido"
                                name="lastName"
                                onChange={handleInputChange}
                                variant="outlined" />
                            <TextField
                                required
                                id="outlined-basic"
                                label="DNI"
                                name="DNI"
                                onChange={handleInputChange}
                                variant="outlined" />
                        </div>
                    </Grid>
                    <Grid item md={12} className="mb-4">
                        <div >
                            <TextField
                                required
                                id="date"
                                name="birthday"
                                label="Nacimiento"
                                type="date"
                                onChange={handleInputChange}
                                className="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                className="mr-4 ml-4"
                                id="outlined-basic"
                                label="E-mail"
                                name="email"
                                onChange={handleInputChange}
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                label="Dirección"
                                name="direccion"
                                onChange={handleInputChange}
                                variant="outlined" />
                        </div>
                    </Grid>
                    <Grid item md={12} className="mb-4">
                        <div className="buttonGroup">
                            <TextField
                                type="number"
                                id="outlined-basic"
                                className="carnet mr-4"
                                label="N° de Carnet"
                                name="nSocio"
                                onChange={handleInputChange}
                                variant="outlined" />
                            <TextField
                                type="number"
                                id="outlined-basic"
                                className="carnet mr-4"
                                label="Celular o Fijo"
                                name="celular"
                                onChange={handleInputChange}
                                variant="outlined" />
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleInputChange}
                                color="primary"
                                className="ml-4"
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
                        <div className="botonAgregar">
                            <button
                                type="button"
                                className="btn btn-outline-success"
                                onClick={() => cargarDatos(datos)}
                            >Cargar</button>
                        </div>
                    </Grid>
                </form>
            </Grid>
        </div>
    )
}