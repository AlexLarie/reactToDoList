import React , {useReducer} from 'react'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'

export const FirebaseState = ({children}) => {

   const [state, dispatch] = useReducer(firebaseReducer, ini)

   return (
      <FirebaseContext.Provider>
         {children}
      </FirebaseContext.Provider>
   )
}