import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StickNote from './components/Stickynote';
import DropZone from './components/Dropzone';
import { INote } from './types';
import './App.css';
import Store from './utils/store';

function App() {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const oldNotes = Store.getItem("notes");
    if (oldNotes) {
      setNotes([...JSON.parse(oldNotes)]);
    }
  }, []);

  const getNewNotePosition = (): { left: number, top: number} => {

    const lastNodeId = notes[notes.length - 1]?.id;
    if(lastNodeId){
      const lastNoteElement = document.getElementById(lastNodeId.toString());
      const rect = lastNoteElement?.getBoundingClientRect();
      const notesContainerSize = (0.8 * window.innerWidth);
      const leftPos = (rect?.right || 0);
      const pageBreak = leftPos + 220 >= notesContainerSize ? 1 : 0;
      return {
        left: pageBreak ? 0 : leftPos + 20, 
        top: pageBreak ? lastNoteElement!.offsetTop + rect!.height + 20 : lastNoteElement!.offsetTop,
      }
    }
    return {
      left: 0,
      top: 0,
    }
  }

  const handleCreateNote = () => {
    const newNotePosition = getNewNotePosition();
    const newNote = [...notes, {
      id: Number(new Date().getTime()),
      content: "",
      left: newNotePosition.left,
      top: newNotePosition.top,
    }]
    setNotes(newNote);
    Store.setItem("notes", JSON.stringify(newNote));
  }

  const handleClearNote = () => {
    Store.clearItem();
    setNotes([]);
  }

  const handleDraggedNote = (left: number, top: number, noteId: number) => {
    const allNotes = [...notes];
    const note = allNotes.find((n) => n.id === noteId);
    if (!note) return;
    note.left = left;
    note.top = top;
    setNotes(allNotes);
    Store.setItem("notes", JSON.stringify(allNotes));

  }

  const handleRemovenote = (noteId: number) => {
    const allNotes = [...notes];
    const filterNotes = allNotes.filter((n) => n.id !== noteId);
    setNotes(filterNotes);
    Store.setItem("notes", JSON.stringify(allNotes));

  }

  return (
    <React.Fragment>
      <Navbar createNote={handleCreateNote} clearNote={handleClearNote}/>
      <DropZone onDragNote={handleDraggedNote} onRemoveNote={handleRemovenote}>
        {notes.map((n) => <StickNote note={n} key={n.id} />)}
      </DropZone>

    </React.Fragment>
  );
}

export default App;
