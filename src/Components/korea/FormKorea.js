import React from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

export default function FormKorea({
    newKPlace,
    postKPlace,
    handleKCity,
    handleKPicture
}) {
    return(
        <Form onSubmit={(e) => postKPlace(e)} className="p-2">
            <Card border="primary" style={{ width: '40rem' }}>
                <Card.Body>
                    <h1>Korea Adventure!</h1>

                    <Form.Group className="mb-3 bg-warning" controlId="exampleForm.ControlInput1">
                        <Card.Header>Post Adventure</Card.Header>
                        <Form.Label>City Name</Form.Label>
                        <input 
                            value={newKPlace.kCity} //resets form field
                            onChange={(e) => handleKCity(e.target.value)}
                        /> 
                    </Form.Group>
                    
                    <Form.Group className="mb-3 bg-warning" controlId="exampleForm.ControlInput1">
                        <h3>Post Picture</h3>
                        <Form.Label>Image URL</Form.Label>
                        <input
                            value={newKPlace.kPicture} 
                            onChange={(e) => handleKPicture(e.target.value)} // Access the file using e.target.files[0]
                        />
                    </Form.Group>
                    <Button variant="warning" type="submit">Submit</Button>
                </Card.Body>
            </Card>
            
        </Form>
    )
}