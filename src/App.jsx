import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [saved, setsaved] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let td = await localStorage.getItem("noteList");
        setNotes(JSON.parse(td));
        // console.log(td, "///")
      } catch (err) {
        console.log(err.message);
      }
    })();
    return () => {};
  }, [saved]);

  const addNote = (newNote) => {
    // fetch all todolist from localstorage
    let todolist = JSON.parse(localStorage.getItem("noteList"));
    if (!todolist) {
      let arr = [];
      arr.push(newNote);
      localStorage.setItem("noteList", JSON.stringify(arr));
    } else if (todolist.length > 0) {
      let newTodoList = [...todolist, newNote];
      localStorage.setItem("noteList", JSON.stringify(newTodoList));
    }
    return setsaved(!saved);
  };
  const deleteNote = (id) => {
    setNotes((prevNote) => {
      let updatedNotes = prevNote.filter((noteItem, index) => {
        return index !== id;
      });
      localStorage.setItem("noteList", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };
  return (
    <div className="App bg-transparent h-full font-poppins">
      <Header />
      <Input onAdd={addNote} />
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center mt-10 gap-5 h-full">
        {notes.map((noteItem, index) => {
          return (
            <div className="" key={index}>
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
