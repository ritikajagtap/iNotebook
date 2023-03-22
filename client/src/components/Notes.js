import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const [show, setShow] = useState(false);
    const [note, setNote] = useState({etitle: "", edesc:"", etag: ""})

    const handleClose = () => setShow(false);
    const updateNote = (currentNote) => {setShow(true)
        console.log(currentNote);
        setNote({id: currentNote._id, etitle: currentNote.title, edesc: currentNote.description, etag: currentNote.tag})
    };
    useEffect(() => {
        getNotes()
    })

    const handleClick = (e) => {
        console.log("updating the note!")
        editNote(note.id, note.etitle, note.edesc, note.tag);
        e.preventDefault();
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
            <AddNote />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='my-3'>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label className='form-label'>Add Title</Form.Label>
                            <Form.Control type="text" controlid="etitle" value={note.etitle}  name='etitle' placeholder="Enter title" onChange={onChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="desc">
                            <Form.Label>Add Description</Form.Label>
                            <Form.Control type="text" value={note.edesc}  controlid='edesc' name='edesc' placeholder="Description" onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tag">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" value={note.etag} controlid='etag' name='etag' placeholder="tag" onChange={onChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleClick} variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="row md-2" >
                <h1>Your Notes!</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note}></NoteItem>
                })}
            </div>
        </>
    )
}

export default Notes