import React, { useState } from 'react'
import { Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

export default function Search() {
    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        }

        setValidated(true);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Form.Row >
                        <Form.Group className="text-center" controlId="validationCustom02">
                            <Form.Label>Buscar</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Busqueda"
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Row>
        </Container>
    )
}