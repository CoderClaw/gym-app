import React from 'react'
import Container from 'react-bootstrap/Container'
import ClientCard from './ClientCard'
import {useAllClients} from '../hooks/useAllClients'


function ClientList() {

    const data = useAllClients()


    return (
        <Container className="d-flex flex-column mt-5">
            {
                (data !== [])
                ? data.map((client,index)=>{
                    return <ClientCard key={index} cliente={client}></ClientCard>
                })
                : <h3>no hay clientes para mostrar</h3>

            }
           
        </Container>
        
    )
}

export default ClientList
