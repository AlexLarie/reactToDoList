export const firebaseReducer = (state, action) => {
   const handle = handlers[act]

   return handle(state,action)
}