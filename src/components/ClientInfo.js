import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import {useParams} from 'react-router-dom'
import useClientByDni from '../hooks/useClientByDni'

function ClientInfo() {

    const params = useParams();
    
    const clientData = useClientByDni(params.id);
    
    
    
    return (
        <Container className="mt-3">
            <Card>
                <Card.Header>
                    <Card.Title>{clientData.nombre}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {clientData.dni}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ClientInfo
