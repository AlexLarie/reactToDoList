import React , {Fragment , useContext, useEffect} from 'react'
import { Form } from '../components/Form'
import { Nodes } from '../components/Nodes'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
   const {loading, notes, fetchNotes} = useContext(FirebaseContext)

   useEffect(()=>{
      fetchNotes()
      // eslint-disable-next-line
   }, [])
   
   return(
   <Fragment>
      <Form/>

      {loading}

      <Nodes notes = {notes}/>
   </Fragment>
   )
}