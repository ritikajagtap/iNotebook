import { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props) => {
    const notesInitial = [{
        "_id": "1",
        "user": "1",
        "title": "this is my fist note",
        "description": "this is the description!",
        "tag": "General",
        "date": "2023-03-08T16:21:14.516Z",
        "__v": 0
    },
    {
        "_id": "2",
        "user": "2",
        "title": "this is my fist note",
        "description": "this is the description!",
        "tag": "General",
        "date": "2023-03-08T16:21:14.516Z",
        "__v": 0
    },
    {
        "_id": "3",
        "user": "3",
        "title": "this is my fist note",
        "description": "this is the description!",
        "tag": "General",
        "date": "2023-03-08T16:21:14.516Z",
        "__v": 0
    },
    {
        "_id": "4",
        "user": "4",
        "title": "this is my fist note",
        "description": "this is the description!",
        "tag": "General",
        "date": "2023-03-08T16:21:14.516Z",
        "__v": 0
    }]
    const[notes, setNotes] = useState(notesInitial)
    // Add note
    // todo api call

    const addNote = (title, description, tag) => {
        console.log("adding a new note");
        const note = {
        "_id": "8",
        "user": "8",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-03-08T16:21:14.516Z",
        "__v": 0
        };
        setNotes(notes.concat(note))
    }
    // Delete Note
    const delNote = (id) => {
        console.log("deleting the note with " + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }
    // Edit a Note

    const editNote = (id, title, description, tag) => {
        
    }
    return (
        <NoteContext.Provider value={{notes, addNote, delNote, editNote}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;