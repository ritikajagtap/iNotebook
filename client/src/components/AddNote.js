import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", desc:"", tag: "default"})
    const handleClick = (e) => {
        e.preventDefault(); 
        addNote(note.title, note.desc, note.tag);
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h1>Add a Note!</h1>
            <Form className='my-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='form-label'>Add Title</Form.Label>
                    <Form.Control type="text" controlid="title" name='title' placeholder="Enter title" onChange={onChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Add Description</Form.Label>
                    <Form.Control type="text" controlid='desc' name='desc' placeholder="Description" onChange={onChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Add Note
                </Button>
            </Form>

        </div>
    )
}

export default AddNote