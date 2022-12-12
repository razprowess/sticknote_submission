import './stickynote.css';
import { INote } from '../../types';
import React from 'react';
import Store from '../../utils/store';

interface IStickyNoteProp {
    note: INote
}

const StickNote: React.FC<IStickyNoteProp> = ({ note }) => {
    const drag = (event: any) => {
        let rect = (event.target as HTMLDivElement).getBoundingClientRect(); // the horizontal distance between the edge of the containr and the mouse position
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const data = { noteId: note.id, offsetX, offsetY };
        event.dataTransfer.setData("text/plain", JSON.stringify(data));
    }

    //getting the content from the note before a drag event
    const handleEvent = (event: any) => {
        let filterTimeout: string | number | NodeJS.Timeout | undefined;
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(() => {
            const id = note.id;
            const content = event.target.innerText;
            //mutating note in the local storage
            const oldNotes = Store.getItem("notes");
            let newNotes = [];
            if (oldNotes) {
                const notes = JSON.parse(oldNotes);
                newNotes = notes.map((n: INote) => {
                    if (n.id === id) {
                        n.content = content;
                    }
                    return n
                });
            }
            Store.setItem("notes", JSON.stringify(newNotes))
        }, 1000);
    };

    const onBlur = (event: any) => {
        handleEvent(event)
    }

    const onInput = (event: any) => {
        handleEvent(event)
    }

    return (
        <div className="note-container" id={note.id.toString()} style={{ left: note.left, top: note.top }} draggable contentEditable onDragStart={(event) => drag(event)} onInput={(event) => onInput(event)}
            onBlur={(event) => onBlur(event)}>
            {note.content}
        </div>
    )
}

export default StickNote