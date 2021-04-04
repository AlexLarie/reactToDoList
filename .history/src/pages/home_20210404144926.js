import React , {Fragment , useContext} from 'react'
import { Form } from '../components/Form'
import { Nodes } from '../components/Nodes'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
   const {loading} = useContext(FirebaseContext)
   
   return(
   <Fragment>
      <Form/>
      <Nodes notes = {notes}/>
   </Fragment>
   )
}