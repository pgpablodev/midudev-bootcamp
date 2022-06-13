import './App.css';
import {useState} from 'react';
import {Note} from './Note.js'; //llaves y nombre exacto debido a exportación nombrada (y no default)

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //evitamos el comportamiento por defecto del formulario, que es ejecutar un POST al server (en este caso, no es lo que queremos)
    const noteToAdd = {
      id: notes.length,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes((prevNotes) => prevNotes.concat(noteToAdd))
    setNewNote("")
  }
  return(
    <div>
      <h1>Notes</h1>
      <ol style={{paddingLeft: "1.8em"}}>
        {notes.map((note) => <Note key={note.id} {...note}/>)}
      </ol>
      <form onSubmit={handleSubmit} style={{paddingLeft: "0.2em"}}>
        <input type="text" onChange={handleChange}></input>        
        <button>Crear nota</button>        
      </form>
    </div>
  )
}

export default App;
