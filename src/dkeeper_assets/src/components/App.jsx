import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper/index";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log('Called useEffect');
    fetchNotes();
  }, []);

  function addNote(newNote) {
    setNotes(prevNotes => {
      dkeeper.createNote(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  }

  async function fetchNotes() {
    const notesArray = await dkeeper.readNotes();
    setNotes(notesArray);
  }

  function deleteNote(id) {
    dkeeper.deleteNoteAtIndex(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
