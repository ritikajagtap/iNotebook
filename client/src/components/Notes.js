import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
            <div className="row md-2" >
                <h1>Your Notes!</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note}></NoteItem>
                })}
            </div>

    )
}

export default Notes