import React from "react"

export const Nodes = ({notes, onRemove}) => {
   return (
      <ul className = "list-group">
         {notes.map(note => (
            <li className = "list-group-item note" key = {note.id}>
               <div className = "note__inner">
                  <span>{note.date}</span>
                  <strong>{note.title}</strong>
               </div>
               
               <button type="button" className="btn btn-outline-danger btn-sm"
               onC>&times;</button>
            </li>
         ))}
      </ul>
   )
}