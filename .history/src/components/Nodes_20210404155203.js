import React from "react"
import {} from "react-transition-group"

export const Nodes = ({notes, onRemove}) => (
   <ul className = "list-group">
      {notes.map(note => (
         <li className = "list-group-item note" key = {note.id}>
            <div className = "note__inner">
               <span>{note.date}</span>
               <strong>{note.title}</strong>
            </div>
            
            <button type="button" className="btn btn-outline-danger btn-sm"
            onClick = {()=>onRemove(note.id)}>&times;</button>
         </li>
      ))}
   </ul>
)