import './App.css';
import {useEffect, useState} from 'react';
import {Note} from './Note.js'; //llaves y nombre exacto debido a exportación nombrada (y no default)
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')      
      .then((response) => {
        const {data} = response
        setNotes(data)
        setLoading(false)
    })   
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //evitamos el comportamiento por defecto del formulario, que es ejecutar un POST al server (en este caso, no es lo que queremos)
    const noteToAdd = {
      id: notes.length,
      title: newNote,
      body: newNote
    }
    setNotes((prevNotes) => prevNotes.concat(noteToAdd))
    setNewNote("")
  }

  return(
    <div>
      <h1>Notes</h1>
      {loading ? 'Cargando...' : ''}
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
