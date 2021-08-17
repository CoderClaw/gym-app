import {db} from '../firebase/firebaseConfig'
import {useEffect,useState} from 'react'




function useClientByDni(id) {

    const [client,setClient] = useState([])

    useEffect(()=>{
        const unsuscribe = db.collection('clientes').doc(id).get()
        .then(doc=> {
            if(doc.exists){
				setClient(doc.data());
                
			} else {	
				console.log('el documento no existe')
			}
        })

        return unsuscribe
    },[id])
    

    return client
}

export default useClientByDni