import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




const TodoInput = ({ addTodo }) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('General');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        if (title.trim() === '') return; // Validation
        addTodo(Date.now(), title, category, body);
        // Clear form
        setTitle('');
        setBody('');
        setCategory('General');
        handleClose();
    };
    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add Todo"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} value={body} onChange={(e) => setBody(e.target.value)} />
                        <DropdownButton id="dropdown-basic" title="Select Category" variant="Secondary">
                            <Dropdown.Item as="button">Personal & Lifestyle</Dropdown.Item>
                            <Dropdown.Item as="button">Work & Career </Dropdown.Item>
                            <Dropdown.Item as="button">Social & Community </Dropdown.Item>
                            <Dropdown.Item as="button">Other </Dropdown.Item>
                        </DropdownButton>
                    </Form>

                </Modal.Body >
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default TodoInput