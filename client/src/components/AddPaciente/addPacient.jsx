import React, { useState } from 'react'
import {  Grid, Radio } from '@material-ui/core'
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
                <form onSubmit={() => cargarDatos(datos)} noValidate autoComplete="off">
                    <div className="datosPersonales">
                        <div className="badge badge-primary text-wrap bd-highlight">
                            Agregar Datos Personales
                        </div>
                    </div>
                    <Grid item md={12} className="mb-4">
                        <div>
                            <input
                                required
                                className="mr-4"
                                name="name"
                                onChange={handleInputChange}
                                placeholder="Nombre"
                            />
                            <input
                                required
                                className="mr-4"
                                placeholder="Apellido"
                                name="lastName"
                                onChange={handleInputChange}
                            />
                            <input
                                required
                                placeholder="DNI"
                                name="DNI"
                                onChange={handleInputChange}
                            />
                        </div>
                    </Grid>
                    <Grid item md={12} className="mb-4">
                        <div >
                            <input
                                required
                                name="birthday"
                                placeholder="Nacimiento"
                                type="date"
                                onChange={handleInputChange}
                                className="date"
                            />
                            <input
                                className="mr-4 ml-4"
                                placeholder="E-mail"
                                name="email"
                                onChange={handleInputChange}
                            />
                            <input
                                placeholder="Dirección"
                                name="direccion"
                                onChange={handleInputChange}
                            />
                        </div>
                    </Grid>
                    <Grid item md={12} className="mb-4">
                        <div className="buttonGroup">
                            <input
                                type="number"
                                placeholder="N° de Carnet"
                                name="nSocio"
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                className="ml-3"
                                placeholder="Celular o Fijo"
                                name="celular"
                                onChange={handleInputChange}
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
                        <div className="botonAgregar">
                            <button
                                type="submit"
                                className="btn btn-outline-success"
                                onSubmit={() => cargarDatos(datos)}
                            >Cargar</button>
                        </div>
                    </Grid>
                </form>
            </Grid>
        </div>
    )
}