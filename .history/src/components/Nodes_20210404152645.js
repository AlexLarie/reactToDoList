import React from "react"

export const Nodes = ({notes}) => {
   return (
      <ul className = "list-group">
         {notes.map(note => (
            <li className = "list-group-item note" key = {note.id}>
               <div className = "note__inner">
                  <span>{new Date().toLocaleDateString()}</span>
                  <strong>{note.title}</strong>
               </div>
               
               <button type="button" className="btn btn-outline-danger btn-sm" disabled aria-label="Close">&times;</button>
            </li>
         ))}
      </ul>
   )
}