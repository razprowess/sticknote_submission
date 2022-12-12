import './stickynote.css';
import {INote} from '../../types'; 
import React from 'react';

interface IStickyNoteProp {
    note: INote
}

const StickNote:React.FC<IStickyNoteProp> = ({note}) => {
  const drag = (event: any)=>{
      let rect = (event.target as HTMLDivElement).getBoundingClientRect(); // the horizontal distance between the edge of the containr and the mouse position
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const data = {noteId: note.id, offsetX, offsetY};
      event.dataTransfer.setData("text/plain", JSON.stringify(data));
  } 
   
    return (
        <div className="note-container" style={{left: note.left, top: note.top }} draggable contentEditable onDragStart={(event)=>drag(event)}>

        </div>
    )
}

export default StickNote