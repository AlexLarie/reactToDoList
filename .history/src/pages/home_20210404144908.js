import React , {Fragment , useContext} from 'react'
import { Form } from '../components/Form'
import { Nodes } from '../components/Nodes'

export const Home = () => {
   const {} = useContext(fi)
   
   return(
   <Fragment>
      <Form/>
      <Nodes notes = {notes}/>
   </Fragment>
   )
}