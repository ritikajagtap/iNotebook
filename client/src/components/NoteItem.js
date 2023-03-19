import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';
import Card from 'react-bootstrap/Card';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {delNote} = context
    const { note } = props;
    return (
        <div className='col md-3'>
            <Card style={{ width: '18rem' }} className="my-3">
                <Card.Body>
                    <div className="d-flex align-items-center">
                        <Card.Title>
                            {note.title}
                        </Card.Title>
                        <i className="fa-solid fa-pencil mx-2" ></i>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{delNote(note._id)}}></i>
                    </div>

                    <Card.Text>
                        {note.description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default NoteItem