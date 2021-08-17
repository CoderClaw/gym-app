import {useState,useEffect} from 'react'
import {db} from '../firebase/firebaseConfig'

function useAllActivities() {
    const [activities,setActivities] = useState([])

    useEffect(()=>{
        const unsuscribe = db.collection('actividades').onSnapshot(snapshot => {
            setActivities(snapshot.docs.map(doc=>doc.data()))
        })
        return unsuscribe
    },[])
    
    return activities
}

export default useAllActivities
