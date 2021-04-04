export const firebaseReducer = (state, action) => {
   const handle = handlers[action.type] || handllers

   return handle(state,action)
}