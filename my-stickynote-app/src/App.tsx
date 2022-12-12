import React, {useState} from 'react';
import Navbar from './components/Navbar';
import StickNote from './components/Stickynote';
import DropZone from './components/Dropzone';
import { INote } from './types';
import './App.css';

function App() {
const [notes, setNotes] = useState<INote[]>([]);

const handleCreateNote =()=> {
const allNotes = [...notes, {
  id: new Date().getTime(),
  top: 0,
  left: 0,
  content: ""
}]

setNotes(allNotes);
}

  return (
    <React.Fragment>
      <Navbar createNote={handleCreateNote}/>
      <DropZone>
        {notes.map((n)=><StickNote note={n} key={n.id}/>)}
      </DropZone>

    </React.Fragment>
  );
}

export default App;
