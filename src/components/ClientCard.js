import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function ClientCard({cliente}) {
    console.log(cliente)
    return (
        <Card 
            className="d-inline-flex justify-content-between flex-row p-2 mt-1"
        >
            <Card.Title>{cliente.nombre}</Card.Title>
            <Card.Text>{cliente.dni}</Card.Text>
            <Card.Text>{cliente.actividades}</Card.Text>
            
            <Nav>
                <Nav.Link as={Link} to={`/info/${cliente.dni}`}>Info</Nav.Link>
                <Nav.Link as={Link} to={`/editar/${cliente.dni}`} >Editar</Nav.Link>
            </Nav>
            
        </Card>
    )
}

export default ClientCard
