import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {db} from '../firebase/firebaseConfig'
import {useHistory} from 'react-router-dom'


function Attendance() {
    let history = useHistory()
    const [dni,setDni] = useState('');
    const [cliente,setCliente] = useState();
    const [hasClient,setHasClient] = useState(false)

    function handleChange(ev){
        setDni(ev.target.value)
    }

    function handleSubmit(ev){
        ev.preventDefault()
        db.collection('clientes').doc(dni).get()
        .then(doc=> {
            if(doc.exists){
				setCliente(doc.data());
                setHasClient(true)
			} else {	
				console.log('el documento no existe')
			}
        })
    }

 //decrease in 1 the number of clases and routes to the client info *need to make sure that the minimum amount of clases is 0 
    
 function handleActivity(ev){

        const newAct = [...cliente.actividades]
        newAct.forEach(act=>{
            if(act.actividad ===ev.target.name){
                act.clases -=1
            }
        })
        db.collection('clientes').doc(dni).set(
            {
                ...cliente,
                actividades:newAct
                
            }
        )
        history.push(`/info/${dni}`)

    }


    return (
       
        <Form className="m-3 mb-4 d-flex flex-column align-items-center h1" >
            {
                (!hasClient)
                                ?<>
                                <Form.Label htmlFor="dni" className="w-75 mt-5 text-center">Por favor, ingrese su DNI:</Form.Label>
                                <Form.Control
                                    className="w-50 mt-3 text-center form-control-lg"
                                    type="number"
                                    name="dni"
                                    value={dni}
                                    onChange={handleChange}
                                />
                                <Button
                                    className="w-50 mt-4"
                                    onClick={handleSubmit}
                                    type="submit"
                                >Enviar</Button></>
                                : 
                                cliente.actividades.map((act,index)=>{
                                    return <Button 
                                    className="w-50 mt-3"
                                    key={index} 
                                    name={act.actividad} 
                                    onClick={handleActivity}>{act.actividad}</Button>
                                })
}
        </Form>
        
        
    )
}

export default Attendance
