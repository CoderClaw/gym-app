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
            <Card className="text-center">
                <Card.Header>
                    <Card.Title>Nombre: {clientData.nombre}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        DNI: {clientData.dni}
                    </Card.Text>
                    <Card.Text>
                        Telefono: {clientData.dni}
                    </Card.Text>
                   <Container>
                       {    (clientData.actividades !==undefined)
                            ?
                           clientData.actividades.map((act,index)=>{
                            return <Container key={index} className="mb-3">
                                        <Card.Text>actividad:  {act.actividad}</Card.Text>
                                        <Card.Text>Clases Restantes:  {act.clases}</Card.Text>
                                        <Card.Text>Fecha de Inicio:  {act.fecha}</Card.Text>
                                    </Container>
                           })
                           :<h2>. . . Cargando</h2>
                       }
                   </Container>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ClientInfo
