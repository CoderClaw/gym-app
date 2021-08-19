import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

function ClientCard({cliente}) {
    
    return (
        <Card 
            className="d-inline-flex flex-row align-items-center mt-1"
        >   
            <Container className="w-25">
                <Card.Title >{cliente.nombre}</Card.Title>
            </Container>
            
           
            <Container className="d-flex justify-content-center align-items-center w-50">{
                cliente.actividades.map((act,index)=>{
                    return <Container key={index} className="d-flex flex-column justify-content-center text-center mt-2 mb-2">
                        <Card.Text>{act.actividad}</Card.Text>
                        <Card.Text>Clases Restantes: {act.clases}</Card.Text>
                        </Container>
                })  }
            </Container>
            
            <Nav className="w-25 d-flex justify-content-end">
                <Nav.Link as={Link} to={`/info/${cliente.dni}`}>Info</Nav.Link>
                <Nav.Link as={Link} to={`/editar/${cliente.dni}`} >Editar</Nav.Link>
            </Nav>
            
        </Card>
    )
}

export default ClientCard
