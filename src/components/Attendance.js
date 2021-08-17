import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {db} from '../firebase/firebaseConfig'


function Attendance() {
    
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


    return (
       
        <Form className="m-3 mb-4 d-flex flex-column" >
            {
                (!hasClient)
                                ?<>
                                <Form.Control
                                    type="number"
                                    name="dni"
                                    value={dni}
                                    onChange={handleChange}
                                />
                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                >Enviar</Button></>
                                : 
                                cliente.actividades.map((act,index)=>{
                                    return <Button key={index}>{act}</Button>
                                })
}
        </Form>
        
        
    )
}

export default Attendance
