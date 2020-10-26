import React, { useState } from 'react'
import { TextField, Grid } from '@material-ui/core'

export default function () {
    const [datos, setDatos] = useState({
        nombre: "",
    })

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">

            <Grid container className="row justify-content-center">
                <form className="mt-2" noValidate autoComplete="off">
                    <Grid item md={12} className="mb-4">
                        <div>
                            <TextField
                                className="mr-4"
                                name="nombre"
                                onChange={handleInputChange}
                                label="Nombre"
                                variant="outlined" />
                            <TextField name="apellido" id="outlined-basic" label="Apellido" variant="outlined" />
                        </div>
                    </Grid>
                    <Grid item md={12} className="mb-4">
                        <div >
                            <TextField className="mr-4" id="outlined-basic" label="DNI" variant="outlined" />
                            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                        </div>
                    </Grid>
                    <Grid item md={12} className="mb-4">
                        <div >
                            <TextField className="mr-4" id="outlined-basic" label="DNI" variant="outlined" />
                            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                        </div>
                    </Grid>
                </form>
            </Grid>
        </div>
    )
}