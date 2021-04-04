import React , {useReducer} from 'react'
import { FirebaseContext } from './firebaseContext'

export const FirebaseState = ({children}) => {

   const [state, dispatch]

   return (
      <FirebaseContext.Provider>
         {children}
      </FirebaseContext.Provider>
   )
}