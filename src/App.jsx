import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const storedNotes = await localStorage.getItem("noteList");
        const parsedNotes = JSON.parse(storedNotes) || [];
        setNotes(parsedNotes);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  const addNote = (newNote) => {
    const existingNotes = JSON.parse(localStorage.getItem("noteList")) || [];
    const updatedNotes = [...existingNotes, newNote];
    localStorage.setItem("noteList", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((_, index) => index !== id);
    localStorage.setItem("noteList", JSON.stringify(filteredNotes));
    setNotes(filteredNotes);
  };

  return (
    <div className="App dark:bg-black bg-transparent h-full min-h-screen font-poppins pb-20 overflow-x-hidden">
      <Header />
      <Input onAdd={addNote} />
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center mt-10 gap-5 h-full">
        {notes.map((noteItem, index) => (
          <div className="" key={index}>
            <Note
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
