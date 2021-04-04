import React , {Fragment} from 'react'
import { Form } from '../components/Form'
import { Nodes } from '../components/Nodes'

export const Home = () => {
   const notes = new Array(3).fill('').map((_,i) => ({id:i , text: `Note ${i}` }))
   
   return(
   <Fragment>
      <Form/>
      <Nodes notes = {notes}/>
   </Fragment>
   )
}