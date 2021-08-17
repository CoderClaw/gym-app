import {db} from '../firebase/firebaseConfig'
import {useEffect,useState} from 'react'




function useAllClients() {

    const [clients,setClients] = useState([])

    useEffect(()=>{
        const unsuscribe = db.collection('clientes').onSnapshot(snapshot => {
            setClients(snapshot.docs.map(doc=>doc.data()))
        })
        return unsuscribe
    },[])
    

    return clients
}

export {useAllClients}
