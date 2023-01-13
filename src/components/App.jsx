import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {/* Aqui vou ao array notes e crio um novo array note que vai passar o title e o content */}
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
