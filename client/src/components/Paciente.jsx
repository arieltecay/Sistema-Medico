import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from "react-redux";
import { getPacientes } from '../redux/actions'
import Search from './Search'
import AddPacient from './addPacient'

export default function Paciente() {
    const dispatch = useDispatch();
    const pacientes = useSelector(store => store.pacientes)

    const [searchBar, setSearchBar] = useState(false);
    const [addPaciente, setAddPaciente] = useState(false)

    const statePaciente = () => {
        setAddPaciente(!addPaciente)
        setSearchBar(false)
    }
    const stateSearch = () => {
        setSearchBar(!searchBar)
        setAddPaciente(false)
    }
    console.log(addPaciente);
    return (
        <div>
            <div className="text-center pt-3 pb-3 ">
                <button
                    onClick={() => dispatch(getPacientes())}
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
                {searchBar ? <Search /> : ""}
                {addPaciente? <AddPacient/> : ""}

            </div>
            <Table striped bordered hover size="sm" responsive>
                <thead size="sm">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map((pac) => (
                        <tr key={pac.id} onClick={() => alert(pac.name)}>
                            <td>{pac.name}</td>
                            <td>{pac.lastName} </td>
                            <td>{pac.DNI}</td>
                            <td>{pac.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}