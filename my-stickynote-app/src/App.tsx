import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StickNote from './components/Stickynote';
import DropZone from './components/Dropzone';
import { INote } from './types';
import './App.css';

function App() {
  const [notes, setNotes] = useState<INote[]>([]);

  const handleCreateNote = () => {
    const newNotes = [...notes, {
      id: new Date().getTime(),
      top: 0,
      left: 0,
      content: ""
    }]
    setNotes(newNotes);
  }

  const handleDraggedNote = (left: number, top: number, noteId: number) => {
    const allNotes = [...notes];
    const note = allNotes.find((n) => n.id === noteId);
    if (!note) return;
    note.left = left;
    note.top = top;
    setNotes(allNotes);
  }

  const handleRemovenote = (noteId: number) => {
    const allNotes = [...notes];
    const filterNotes = allNotes.filter((n) => n.id !== noteId);
    setNotes(filterNotes);
  }

  return (
    <React.Fragment>
      <Navbar createNote={handleCreateNote} />
      <DropZone onDragNote={handleDraggedNote} onRemoveNote={handleRemovenote}>
        {notes.map((n) => <StickNote note={n} key={n.id} />)}
      </DropZone>

    </React.Fragment>
  );
}

export default App;
