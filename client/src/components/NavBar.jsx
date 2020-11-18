import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchBar() {
    return (
        <div className="pb-2">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active ">
                            <Link className="ml-4 text-white h3" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="ml-4 text-white h3" to="/paciente">Paciente</Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="ml-4 text-white h3" to="/prueba">Pruebas</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}