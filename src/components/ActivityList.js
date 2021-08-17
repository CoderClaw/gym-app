import React from 'react'
import Container from 'react-bootstrap/Container'
import useAllActivities from '../hooks/useAllActivities'
import Card from 'react-bootstrap/Card'

function ActivityList() {

    const activities = useAllActivities();
    
    return (
        <Container>
            {
                activities.map((activity,index)=>{
                   return <Card key={index} className="mt-2">
                            <Card.Title>{activity.actividad}</Card.Title>
                            <Card.Text>Clases Mensuales: {activity.clases}</Card.Text>
                        </Card>
                })
            }
        </Container>
    )
}

export default ActivityList
