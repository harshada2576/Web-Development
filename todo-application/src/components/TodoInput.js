import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




const TodoInput = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
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
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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