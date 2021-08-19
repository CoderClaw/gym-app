import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'


function Menu() {
    return (
        <Navbar 
            className="d-flex justify-content-between align-items-center w-100"
            style={{background : '#198754',color:'white'}}  
        >
            <h1>GYM APP</h1>
            <Nav>
                <Nav.Link className="text-white" as={Link} to="/">Asistencia</Nav.Link>
                <Nav.Link className="text-white" as={Link} to="/agregar-cliente">Agregar Cliente</Nav.Link>
                <Nav.Link className="text-white" as={Link} to="/lista">Lista de clientes</Nav.Link>
                <Nav.Link className="text-white" as={Link} to="/actividades">Actividades</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Menu
