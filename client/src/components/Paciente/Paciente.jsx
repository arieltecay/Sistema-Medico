import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPacientes, removePaciente } from '../../redux/actions'
import Search from '../Search/Search'
import AddPacient from '../AddPaciente/addPacient'
import MydModalWithGrid from '../EditPaciente/EditPaciente'
import Swal from 'sweetalert2'
import Pagination from '../Paciente/Pagination'
import Table from 'react-bootstrap/Table'
import { Paper } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'

import './Paciente.css'
import { useEffect } from 'react';

export default function Paciente() {
    const dispatch = useDispatch();
    const pacientes = useSelector(store => store.pacientes)
    const [addPaciente, setAddPaciente] = useState(false)
    const [showPaciente, setShowPaciente] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pacientePerPage] = useState(10)

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
    const seleccionarPaciente = (elemento) => {
        setDatos(elemento)
        setModalShow(true)
    }

    const statePaciente = () => {
        setAddPaciente(!addPaciente)
        setShowPaciente(false)
    }

    const stateShowPaciente = () => {
        dispatch(getPacientes())
        setShowPaciente(!showPaciente)
        setAddPaciente(false)
    }
    useEffect(() => {
        setLoading(true)
        stateShowPaciente();
        setLoading(false)
    }, [])

    function eliminar(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removePaciente(id))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setShowPaciente(false)
            }
        })
    }

    //Get Currents Pacients
    const indexOfLast = currentPage * pacientePerPage;
    const indexOfFirst = indexOfLast - pacientePerPage;
    const currentPaciente = pacientes.slice(indexOfFirst, indexOfLast)
    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="pt-5">
            {modalShow && <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} datos={datos} />}
            <div className="text-center pt-3 pb-3 ">
                <button
                    onClick={() => stateShowPaciente()}
                    type="button"
                    className="btn btn-outline-primary"
                >Mostrar Todos</button>
                <button
                    onClick={() => statePaciente()}
                    type="button"
                    className="btn btn-outline-primary ml-3"
                >Agregar</button>
            </div>
            <div>
                <div>
                    {addPaciente ? <AddPacient /> : ""}
                </div>
            </div>
            {showPaciente &&
                <div>
                    <div className="search">
                        <Search />
                    </div>
                    <div className='pagination'>
                        <Pagination
                            postsPerPage={pacientePerPage}
                            totalPosts={pacientes.length}
                            paginate={paginate}
                            className='pagination-button'
                        />
                    </div>
                    <div className="container">
                        <Table
                            className="table table-sm"
                            striped
                            bordered
                            hover
                            size="sm"
                            responsive>
                            <thead size="sm">
                                <tr className='cabecera'>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>DNI</th>
                                    <th>Celular</th>
                                    <th>E-Mail</th>
                                    <th>Direccion</th>
                                    <th>Carnet</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPaciente.map((pac) => (
                                    <tr key={pac.id}>
                                        <td data-titulo='Nombre'>{pac.name}</td>
                                        <td data-titulo='Apellido'>{pac.lastName} </td>
                                        <td data-titulo='DNI'>{pac.DNI}</td>
                                        <td data-titulo='Celular'>{pac.celular}</td>
                                        <td data-titulo='E-mail'>{pac.email}</td>
                                        <td data-titulo='Dreccion'>{pac.direccion}</td>
                                        <td data-titulo='N° de Socio'>{pac.nSocio}</td>
                                        <td className='botones'>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => seleccionarPaciente(pac)}
                                            >
                                                <FontAwesomeIcon icon={faUserEdit} /> Edit</button>
                                            {"  "}
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => eliminar(pac.id)}
                                            >
                                                <FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            }

        </div>
    )
}