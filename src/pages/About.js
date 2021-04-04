import React , {Fragment} from 'react'

export const About = () => {
   return(
      <Fragment>
         <div className="jumbotron">
            <div className = "container">
               <h1 className = "display-4">Best react app</h1>
               <p className = "lead">
                  Version of app <strong>1.0.16</strong>
               </p>
            </div>
         </div>
      </Fragment>
   )
}