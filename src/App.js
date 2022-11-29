import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewNoteArea from "./components/NewNoteArea";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      setNotes(notes);
    }
  }, []);
  const addNote = (newNote) => {
    if (newNote.title !== "" && newNote.content !== "") {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  return (
    <div className="App">
      <Header />
      <NewNoteArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          title={noteItem.title}
          content={noteItem.content}
          key={index}
          id={index}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
