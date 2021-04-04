import React , {useReducer} from 'react'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'

const url = process.env.REACT

export const FirebaseState = ({children}) => {

   const initialState = {
      notes : [],
      loading : false
   }

   const [state, dispatch] = useReducer(firebaseReducer, initialState)

   return (
      <FirebaseContext.Provider value = {{

      }}>
         {children}
      </FirebaseContext.Provider>
   )
}