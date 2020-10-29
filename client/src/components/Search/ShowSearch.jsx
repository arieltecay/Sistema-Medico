import Table from 'react-bootstrap/Table'
import React from 'react'
import { useSelector } from "react-redux";


export default function ShowSearch() {
    const pacientes = useSelector((state) => state.pacientes);

    return (
        <div>
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
        </div>
    )
}