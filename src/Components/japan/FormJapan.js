import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function FormJapan({
    newJPlace,
    postJPlace,
    handleJCity,
    handleJPicture
}) {
    return(
        <Form onSubmit={(e) => postJPlace(e)} className="p-2">
            <Card border="primary" style={{ width: '40rem' }}>
                <Card.Body>
                    <h1>Japan Adventure!</h1>
                    
                    <Form.Group className="mb-3 bg-warning" controlId="exampleForm.ControlInput1">
                        <Card.Header>Post Adventure</Card.Header>
                        <Form.Label>City Name</Form.Label>
                        <input 
                            value={newJPlace.jCity} //resets form field
                            onChange={(e) => handleJCity(e.target.value)}
                        />
                    </Form.Group>
            
                    <Form.Group className="mb-3 bg-warning" controlId="exampleForm.ControlInput1">
                        <Card.Header>Post Picture</Card.Header>
                        <Form.Label>Image URL</Form.Label>
                        <input
                            value={newJPlace.jPicture} 
                            onChange={(e) => handleJPicture(e.target.value)} // Access the file using e.target.files[0]
                        />
                    </Form.Group>
                    <Button variant="warning" type="submit">Submit</Button>
                </Card.Body>
            </Card>
        </Form>
    )
}