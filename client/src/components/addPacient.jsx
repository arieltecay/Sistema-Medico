import React, { useState } from 'react'
import { TextField, Grid } from '@material-ui/core'

export default function () {
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: '',
        dni: "",
        email: "",
        domicilio: "",
        ciudad: ""
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const enviarDatos = (e) => {
        e.preventDefault(); //Funcion que evita el procesamiento automatico. Si presiona el boton de enviar lo hace a travez del metodo get sin preguntar nada.
        console.log(datos.nombre + " " + datos.apellido);
    }
    return (
        <div className="container">

            <Grid container className="row justify-content-center">
                <form className="mt-2" onSubmit={enviarDatos} noValidate autoComplete="off">
                    <Grid item md={12} className="mb-4">
                        <div>
                            <TextField
                                className="mr-4"
                                id="outlined-basic"
                                name="nombre"
                                onChange={handleInputChange}
                                label="Nombre"
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                label="Apellido"
                                name="apellido"
                                onChange={handleInputChange}
                                variant="outlined" />
                        </div>
                    </Grid>
                    <Grid item md={12} className="mb-4">
                        <div >
                            <TextField
                                className="mr-4"
                                id="outlined-basic"
                                label="DNI"
                                name="dni"
                                onChange={handleInputChange}
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                label="E-mail"
                                name="email"
                                onChange={handleInputChange}
                                variant="outlined" />
                        </div>
                    </Grid>
                    <Grid item md={12} className="mb-4">
                        <div >
                            <TextField
                                className="mr-4"
                                id="outlined-basic"
                                label="Domicilio"
                                name="domicilio"
                                onChange={handleInputChange}
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                label="Ciudad"
                                name="ciudad"
                                onChange={handleInputChange}
                                variant="outlined" />
                        </div>
                    </Grid>
                    {/* <h3>
                        {datos.dni}
                        {datos.ciudad}
                        {datos.domicilio}
                        {datos.email}
                        {datos.nombre}
                        {datos.apellido}
                    </h3> Prueba de que funciona mostrando en el texto*/}
                </form>
            </Grid>
        </div>
    )
}