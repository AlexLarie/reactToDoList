import React , {useReducer} from 'react'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'

export const FirebaseState = ({children}) => {

   const

   const [state, dispatch] = useReducer(firebaseReducer, initialState)

   return (
      <FirebaseContext.Provider>
         {children}
      </FirebaseContext.Provider>
   )
}