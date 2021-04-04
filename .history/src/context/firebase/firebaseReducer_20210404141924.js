export const firebaseReducer = (state, action) => {
   const handle = handlers[action.ty]

   return handle(state,action)
}