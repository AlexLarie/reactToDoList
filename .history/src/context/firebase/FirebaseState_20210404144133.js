import React , {useReducer} from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {

   const initialState = {
      notes : [],
      loading : false
   }

   const [state, dispatch] = useReducer(firebaseReducer, initialState)

   const showLoader = () => dispatch({type: SHOW_LOADER})

   const fetchNotes = async () => {
      showLoader()
      const res = await axios.get(`${url}/notes.json`)
      console.log('fetchNotes', res.data)
   }

   const addNote = async title => {
      const note = {
         title,
         date: new Date().toJSON()
      }
   }

   return (
      <FirebaseContext.Provider value = {{

      }}>
         {children}
      </FirebaseContext.Provider>
   )
}