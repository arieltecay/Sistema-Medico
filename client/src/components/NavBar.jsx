import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

export default function SearchBar() {
    return (
        <div >
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto  ">
                    <Link className="ml-4 text-white h3" to="/">Inicio</Link>
                    <Link className="ml-4 text-white h3" to="/paciente">Paciente</Link>
                </Nav>
                <h3 className="w-50 p-3 "><Link  to="/">logMdic</Link></h3>

            </Navbar>
        </div>
    );

}