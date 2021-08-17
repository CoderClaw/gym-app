import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {db} from '../firebase/firebaseConfig' 

function FormActivity() {

    const [actividad, setActividad] = useState()
    const [clases, setClases] = useState() 


    function handleChange(ev){
        switch(ev.target.name){
          case 'actividad':
            setActividad(ev.target.value)
            break
          case 'clases':
            setClases(ev.target.value)
            break
          default:
            break
        }
      }

      function handleSubmit(ev){
        ev.preventDefault()
        db.collection('actividades').doc(actividad).set(
          {
              actividad:actividad,
              clases: clases
          }
      ).then(()=>console.log('succes'))
      .catch(err => console.log(err))
      }

    return (
        <Form 
        className="m-3 mb-4 d-flex flex-column" 
        onSubmit={handleSubmit}> 
        <Form.Label name="actividad">Actividad</Form.Label>
        <Form.Control
          type="text"
          name="actividad"
          value={actividad}
          onChange={handleChange}
        />
        <Form.Label name="clases">Clases Mensuales</Form.Label>
        <Form.Control className=""
          type="number"
          name="clases"
          value={clases}
          onChange={handleChange}
        />
        
       
        <Button className="mt-3" type='submit'>
          Agregar
        </Button>
      </Form>
    )
}

export default FormActivity
