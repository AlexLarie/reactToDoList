import React , {Fragment , useContext, useEffect} from 'react'
import { Form } from '../components/Form'
import { Nodes } from '../components/Nodes'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
   const {loading, notes, fetchNotes} = useContext(FirebaseContext)

   useEffect(())
   
   return(
   <Fragment>
      <Form/>
      <Nodes notes = {notes}/>
   </Fragment>
   )
}