import React , {Fragment} from 'react'
import { Form } from '../components/Form'
import { Nodes } from '../components/Nodes'

export const Home = () => {
   
   
   return(
   <Fragment>
      <Form/>
      <Nodes notes = {notes}/>
   </Fragment>
   )
}