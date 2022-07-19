import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';


export default function EditTodo({ todo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setDescription(todo.description);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const [description, setDescription] = useState(todo.description);

  //Edit description function

  const updateDescription = async (event) => {
    event.preventDefault();

    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <Button variant="warning btn-sm" onClick={handleShow}>Edit</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            type="text"
            defaultValue={description}
            onChange={event => setDescription(event.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger btn-sm" onClick={handleClose}>Close</Button>
          <Button variant="warning btn-sm" onClick={event => updateDescription(event)}>Edit</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};