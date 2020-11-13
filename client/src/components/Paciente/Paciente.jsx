import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPacientes } from '../../redux/actions'
import Search from '../Search/Search'
import AddPacient from '../AddPaciente/addPacient'
import MydModalWithGrid from '../EditPaciente/EditPaciente'
import Pagination from '../Paciente/Pagination'
import Table from 'react-bootstrap/Table'
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
                        <Table className="table table-sm" striped bordered hover size="sm" responsive>
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
                                        <td>{pac.name}</td>
                                        <td>{pac.lastName} </td>
                                        <td>{pac.DNI}</td>
                                        <td>{pac.celular}</td>
                                        <td>{pac.email}</td>
                                        <td>{pac.direccion}</td>
                                        <td>{pac.nSocio}</td>
                                        <td >
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => seleccionarPaciente(pac)}
                                            >
                                                <FontAwesomeIcon icon={faUserEdit} /> Edit</button>
                                            {"  "}
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => alert('Deleted')}
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