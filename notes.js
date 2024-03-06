const fs = require("fs");
const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.filter((note)=> note.title === title)
  if(duplicate){
    console.log('duplicate entry')
    return
  }
  notes.push({
    title:title,
    body:body
  })
  saveNotes(notes)
};

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return []
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
