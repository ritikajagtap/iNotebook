import { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    const getNotes = async () => {
        // API CALL
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxODUxZTgyNjU5M2I4ZmZhNDgxZjNmIn0sImlhdCI6MTY3OTMxNTQ1MH0._VEX3vlyP7BToPyP1R-9JdjzyFi2tqhg_ds6uk4frSc"
            },
        });
        const json = await response.json()
        setNotes(json)
    }

    // Add note
    // todo api call
    
    const addNote = async (title, description, tag) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxODUxZTgyNjU5M2I4ZmZhNDgxZjNmIn0sImlhdCI6MTY3OTMxNTQ1MH0._VEX3vlyP7BToPyP1R-9JdjzyFi2tqhg_ds6uk4frSc"
            },
            body: JSON.stringify({ title, description, tag }),
        });
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
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    // Edit a Note

    const editNote = async (id, title, description, tag) => {

        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxODUxZTgyNjU5M2I4ZmZhNDgxZjNmIn0sImlhdCI6MTY3OTMxNTQ1MH0._VEX3vlyP7BToPyP1R-9JdjzyFi2tqhg_ds6uk4frSc"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title
                element.description = description
                element.tag = tag
            }

        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, delNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;