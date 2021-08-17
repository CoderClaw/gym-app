import React from 'react'
import Container from 'react-bootstrap/Container'
import FormActivity from './FormActivity'
import ActivityList from './ActivityList'

function Activities() {
    return (
        <Container>
            <FormActivity />
            <ActivityList />
        </Container>
    )
}

export default Activities
