import React from "react";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

export default function TableJapan({
    jPlaces,
    deleteJPlace,
    updateJPlace,
    updatedJCity,
    updatedJPicture,
    handleUpdatedJCity,
    handleUpdatedJPicture
}) {
    return(
        <Table striped bordered hover variant="warning" className="border-primary m-2"> 
            <thead>
                <tr>
                    <th>City</th>
                    <th>Picture</th>
                    <th>Delete Place</th>
                    <th>Update City</th>
                    <th>Update Image URL</th>
                </tr>
            </thead>
            <tbody>
            {/*mapped over users to make table elements to display info from API in GET step
            also shows latest POST first with reverse*/}
                {jPlaces.slice(0).reverse().map((jPlace, index) => (
                    <tr key={index}>
                        <td>{jPlace.jCity}</td>
                        <td>
                           <img 
                            src={jPlace.jPicture} 
                            alt={`Image of ${jPlace.jCity}`} 
                            style={{ width: '500px', height: '250px' }} 
                            /> 
                        </td>
                        <td>
                            <Button 
                                variant="outline-danger" 
                                onClick={() => deleteJPlace(jPlace.id)}
                            >
                                🗑
                            </Button>
                        </td>
                        <td>
                            <input 
                                value={updateJPlace.updatedJCity}
                                onChange={(e) => handleUpdatedJCity(e.target.value)}
                                placeholder='Enter New City'
                            />
                            <Button 
                                variant="outline-info"
                                onClick={(e) => updateJPlace(jPlace, 'jCity')}
                            >
                                📝
                            </Button>
                        </td>
                        <td>
                            <input 
                                value={updateJPlace.updatedJPicture}
                                onChange={(e) => handleUpdatedJPicture(e.target.value)}
                                placeholder='Enter New Picture'
                            />
                            <Button 
                                variant="outline-success"
                                type="submit"
                                onClick={(e) => updateJPlace(jPlace, 'jPicture')}
                            >
                                📝
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}