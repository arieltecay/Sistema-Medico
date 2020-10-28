import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from "react-redux";
import { getPacientes } from '../../redux/actions'
import Search from '../Search/Search'
import AddPacient from '../AddPaciente/addPacient'


export default function Paciente() {
    const dispatch = useDispatch();
    const pacientes = useSelector(store => store.pacientes)
    const [searchBar, setSearchBar] = useState(false);
    const [addPaciente, setAddPaciente] = useState(false)
    const [showPaciente, setShowPaciente] = useState(false)

    const statePaciente = () => {
        setAddPaciente(!addPaciente)
        setSearchBar(false)
        setShowPaciente(false)

    }
    const stateSearch = () => {
        setSearchBar(!searchBar)
        setAddPaciente(false)
        setShowPaciente(false)
    }
    const stateShowPaciente = () => {
        dispatch(getPacientes())
        setShowPaciente(!showPaciente)
        setAddPaciente(false)
        setSearchBar(false)
    }

    return (
        <div className="pt-5">
            <div className="text-center pt-3 pb-3 ">
                <button
                    onClick={() => stateShowPaciente()}
                    type="button"
                    className="btn btn-outline-primary"
                >Mostrar Todos</button>

                <button
                    onClick={() => stateSearch()}
                    type="button"
                    className="btn btn-outline-primary ml-3"
                >Buscar</button>

                <button
                    onClick={() => statePaciente()}
                    type="button"
                    className="btn btn-outline-primary ml-3"
                >Agregar</button>
            </div>
            <div>
                <div>
                    {searchBar ? <Search /> : ""}
                </div>
                <div>
                    {addPaciente ? <AddPacient /> : ""}
                </div>

            </div>

            {showPaciente &&
                <div className="container">
                    <Table className="table " striped bordered hover size="sm" responsive>
                        <thead size="sm">
                            <tr>
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
                            {pacientes.map((pac) => (
                                <tr key={pac.id} onClick={() => alert(pac.name)}>
                                    <td>{pac.name}</td>
                                    <td>{pac.lastName} </td>
                                    <td>{pac.DNI}</td>
                                    <td>{pac.celular}</td>
                                    <td>{pac.email}</td>
                                    <td>{pac.direccion}</td>
                                    <td>{pac.nSocio}</td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            }
        </div>
    )
}