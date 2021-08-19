import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {db} from '../firebase/firebaseConfig'
import Alert from 'react-bootstrap/Alert'



function FormComponent(){ 
  
  const [activities,setActivities] = useState([])
  const [nombre,setNombre] = useState('')
  const [dni,setDni] = useState('')
  const [fecha,setFecha] = useState('')
  const [activitySelect,setActivitySelect] = useState([]);
  const [error, setError] = useState(false)

  useEffect(()=>{
    const unsuscribe = db.collection('actividades').onSnapshot(snapshot => {
      setActivities(snapshot.docs.map(doc=>doc.data()))
  })

    return unsuscribe
  },[])
  

  function handleChange(ev){
    switch(ev.target.name){
      case 'nombre':
        setNombre(ev.target.value)
        break
      case 'dni':
        setDni(ev.target.value)
        break
      case 'fecha':
        setFecha(ev.target.value)
        break
      default:
        break
    }
  }

  
  function handleSelect(ev){
    if(activitySelect.includes(ev.target.value)){
      const arr = []
      activitySelect.forEach((item)=>{
        if(item !== ev.target.value){
          arr.push(item)
        }
      })
      setActivitySelect(arr)
    }else{
      setActivitySelect([...activitySelect,ev.target.value])
    }
  }
  

  function handleSubmit(ev){
    ev.preventDefault()
    const newArr =[]
     activitySelect.forEach((act)=>{
        activities.forEach(a=>{
         if(a.actividad===act){
           let newA = {...a}
           newA.fecha = fecha
            newArr.push(newA)
         }
       })
     })
     
    db.collection('clientes').doc(dni).set(
      {
          nombre:nombre,
          dni: dni,
          actividades: newArr,
          fechaDeIngreso: fecha
      }
  ).then(()=>{
    setNombre('')
    setFecha('')
    setDni('')
    setActivitySelect([])
  })
  .catch(err =>{ 
    setError(true)
    console.log(err)})
  }

    return (
      
        
      <Form 
        className="m-3 mb-4 d-flex flex-column" 
        onSubmit={handleSubmit}>
          { error &&
          <Alert 
            variant='danger'
          >Ocurrio un error y los datos no fueron agregados</Alert>}
        <Form.Label name="nombre">Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
        <Form.Label name="dni">Dni</Form.Label>
        <Form.Control className=""
          type="number"
          name="dni"
          value={dni}
          onChange={handleChange}
        />
        <Form.Group className="mb-3 mt-3" name="actividad">
          <Form.Select multiple={true} value={activitySelect} onChange={handleSelect}>
            {
              (activities !== undefined) &&
              activities.map((act,index)=>{
                return <option key={index} value={act.actividad} >{act.actividad}</option>
              }) 
            }
          </Form.Select>
        </Form.Group>
        <Form.Label name="fecha">Fecha</Form.Label>
        <Form.Control className=""
          type="date"
          placeholder="dd-mm-yy"
          name="fecha"
          value={fecha}
          onChange={handleChange}
        />
        <Button className="mt-3" type='submit'>
          Agregar
        </Button>
           
      </Form>
      
      
    )
}

export default FormComponent
