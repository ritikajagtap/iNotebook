import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, addNote, getNotes} = context;
    useEffect(() => {
     getNotes()
    }, [])
    
    return (
            <>
            <AddNote/>

            <div className="row md-2" >
                <h1>Your Notes!</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note}></NoteItem>
                })}
            </div>
            </>
    )
}

export default Notes