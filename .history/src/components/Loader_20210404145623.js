import React from 'react'

export const Loader () => (
   <div className="text-center">
      <button className="btn btn-primary" type="button" disabled>
         <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
      </button>
   </div>
)