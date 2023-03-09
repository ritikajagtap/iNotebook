import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NoteItem = (props) => {
    const {note} = props;
    return (
        <div className='col md-3'>
            <Card style={{ width: '18rem' }} className="my-3">
                <Card.Body>
                    <Card.Title>
                        {note.title}
                    </Card.Title>
                    <Card.Text>
                        {note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque impedit iusto tempora exercitationem placeat, accusamus dolorum. Distinctio soluta velit autem quibusdam laborum maiores, id pariatur fugit? Maxime id amet quia modi quo similique quam.
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NoteItem