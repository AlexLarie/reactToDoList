import React from "react"
import {TransitionGroup, CSSTransition} from "react-transition-group"

export const Nodes = ({notes, onRemove}) => (
   <TransitionGroup component="ul" className = "list-group">
      {notes.map(note => (
         <CSSTransition key = {note.id} classNames = {"note"} timeout={800}>
            <li className = "list-group-item note" >
               <div className = "note__inner">
                  <span>{note.date}</span>
                  <strong>{note.title}</strong>
               </div>

               <button type="button" className="btn btn-outline-danger btn-sm"
               onClick = {()=>{onRemove(note.id)}>&times;</button>
            </li>
         </CSSTransition>
      ))}
   </TransitionGroup>
)