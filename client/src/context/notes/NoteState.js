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
        "_id": "3",
        "user": "3",
        "title": "this is my fist note",
        "description": "this is the description!",
        "tag": "General",
        "date": "2023-03-08T16:21:14.516Z",
        "__v": 0
    }]
    const[notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;