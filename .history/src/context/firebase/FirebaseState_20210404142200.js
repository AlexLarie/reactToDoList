import React from 'react'
import { FirebaseContext } from './firebaseContext'

export const FirebaseState = ({children}) => {
   return (
      <FirebaseContext></FirebaseContext>
   )
}