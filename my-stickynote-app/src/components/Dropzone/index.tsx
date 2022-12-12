import React from 'react';
import './dropzone.css';
interface IDropzoneProps {
    children: React.ReactNode;
    onDragNote: (newLeft: number, newTop: number, noteId: number ) => void,
    onRemoveNote: (noteId: number) => void,
}

const DropZone: React.FC<IDropzoneProps> = ({ children, onDragNote, onRemoveNote }) => {
   
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const {noteId, offsetX, offsetY} = JSON.parse(event.dataTransfer.getData("text"));
        //get the actual offset by subtracting the stickynote offset from the parent container offset
        const x = event.nativeEvent.offsetX - Number(offsetX);
        const y = event.nativeEvent.offsetY - Number(offsetY);
        onDragNote(x, y, Number(noteId));
    }

    const handleRemoveNote = (event: React.DragEvent<HTMLDivElement>) => {
        const {noteId} = JSON.parse(event.dataTransfer.getData("text"));
        onRemoveNote(Number(noteId));
    }

    return (
        <div className="dropzone-container">
            <div className="dropzone" onDrop={(event=>handleDrop(event))} onDragOver={(event=> handleDragOver(event))}>{children}</div>
            <div className="trashzone" onDrop={(event) => handleRemoveNote(event)} onDragOver={(event) => handleDragOver(event)}>
                <h2>DRAG NOTE OVER HERE TO REMOVE IT</h2>
            </div>
        </div>
    )


}

export default DropZone;