import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
          return index !== id
      });
    });
  };

  return (
    <div className="App bg-[#eee] h-full">
      <Header />
      <Input onAdd={addNote} />
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center mt-10 gap-5 h-full">
        {notes.map((noteItem, index) => {
          return (
            <div className="">
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
