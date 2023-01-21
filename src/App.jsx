import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotea] = useState([]);

  const addNote = (newNote) => {
    setNotea((prevNote) => {
      return [...prevNote, newNote];
    });
    console.log(newNote);
  };

  return (
    <div className="App bg-[#eee] h-full">
      <Header />
      <Input onAdd={addNote} />
      <div className="grid grid-cols-4 mt-10 gap-5 h-full">
        {notes.map((noteItem) => {
          return (
            <div className="">
              <Note title={noteItem.title} content={noteItem.content} />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
