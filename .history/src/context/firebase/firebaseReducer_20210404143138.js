import { SHOW_LOADER } from "../types"

const handlers = {
   [SHOW_LOADER] : state => ({...state, loading: true}),
   [ADD_NOTE] : (state, {payload}) => ({
      ...state, notes: [...state.notes, payload]
   }),
   [FETCH_NOTES] : (state,  
   DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
   const handle = handlers[action.type] || handlers.DEFAULT

   return handle(state,action)
}