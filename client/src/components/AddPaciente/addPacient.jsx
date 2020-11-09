import React, { useState, useEffect } from 'react'
import { Radio } from '@material-ui/core'
import { useDispatch } from "react-redux";
import { createPaciente } from '../../redux/actions'
import swal from 'sweetalert';
import './addPaciente.css'

const nameRE = /^[a-z]{2,25}$/i;
const DNIRE = /^[0-9]{8}$/;
const emailRE = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$/;
const mobileRE = /^[0-9]{10}$/;
const nSocioRE = /^[0-9]{5}$/;


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
        nSocio: '',
        nameError: '',
        emailError: '',
        DNIError: '',
        celularError: '',
        nSocioError: '',
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setDatos((prevData) => {
                return {
                    ...prevData,
                    nameError: "",
                    emailError: "",
                    DNIError: "",
                    celularError: "",
                    nSocioError: "",
                };
            });
        }, 6000);

        return () => {
            clearTimeout(timer);
        };
    },
        [datos.nameError,
        datos.emailError,
        datos.DNIError,
        datos.celularError,
        datos.nSocioError]);

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        })
        setSelectedValue(e.target.value);
    }

    const userValidation = (re, checkUser, err) => {
        if (!re.test(checkUser)) {
            setDatos((prevData) => {
                return { ...prevData, [err]: ` Invalido` };
            });
            return false;
        } else {
            setDatos((prevData) => {
                return {
                    ...prevData,
                    [err]: "",
                };
            });
            return true;
        }
    };

    const handleSubmit = () => {
        if (userValidation(nameRE, datos.name, "nameError") &&
            userValidation(DNIRE, datos.DNI, "DNIError") &&
            userValidation(emailRE, datos.email, "emailError") &&
            userValidation(mobileRE, datos.celular, "celularError") &&
            userValidation(nSocioRE, datos.nSocio, "nSocioError")

        ) {
            dispatch(createPaciente(datos))
            console.log(dispatch(createPaciente(datos)));
            mostrarAlert()
            // alert("form submitted");
        }
    };
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
            <form noValidate autoComplete="off">
                <div className="datosPersonales">
                    <div className="badge badge-primary text-wrap bd-highlight">
                        Agregar Datos Personales
                        </div>
                </div>
                <div className="pt-2">
                    <input
                        required
                        type="text"
                        value={datos.name}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Nombre"
                        className={datos.nameError ? "err" : "mr-4"}
                        name="name"
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
                        className={datos.DNIError ? 'err' : null}
                    />
                </div>
                <div className="pt-4" >
                    <input
                        required
                        name="birthday"
                        placeholder="Nacimiento"
                        type="date"
                        className="date mr-4"
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder="E-mail"
                        name="email"
                        className={datos.emailError ? 'err' : 'mr-4'}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder="Dirección"
                        name="direccion"
                        onChange={handleInputChange}
                        className="ml-4"
                    />
                </div>
                <div className="buttonGroup pt-3">
                    <input
                        type="number"
                        placeholder="N° de Carnet"
                        className={datos.nSocioError ? 'err' : "mr-2"}
                        name="nSocio"
                        onChange={handleInputChange}
                    />

                    <input
                        type="number"
                        className={datos.celularError ? 'err' : "mr-2"}
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
                <div >
                    {datos.nameError && <p className="alert alert-danger" role="alert">Nombre {datos.nameError}</p>}
                    {datos.DNIError && <p className="alert alert-danger" role="alert">DNI{datos.DNIError}</p>}
                    {datos.emailError && <p className="alert alert-danger" role="alert">Email {datos.emailError}</p>}
                    {datos.nSocioError && <p className="alert alert-danger" role="alert"> N° de Socio {datos.nSocioError}</p>}
                    {datos.celularError && <p className="alert alert-danger" role="alert">Celular {datos.celularError}</p>}

                </div>
                <div className="pt-4 btnCargar text-center">
                    <button
                        type="button"
                        onClick={() => handleSubmit()}
                        className="btn btn-outline-success"
                    >Cargar</button>
                </div>
            </form>
        </div>
    )
}