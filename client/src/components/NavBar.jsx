import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

export default function SearchBar() {
    return (
        <div className="pb-2">
            <Navbar className="fixed-top" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link className="ml-4 text-white h3" to="/">Inicio</Link>
                    <Link className="ml-4 text-white h3" to="/paciente">Paciente</Link>
                    <Link className="ml-4 text-white h3" to="/prueba">Pruebas</Link>
                </Nav>
                <h3 className="w-50 p-1 "><Link  to="/">logMdic</Link></h3>

            </Navbar>
        </div>
    );

}