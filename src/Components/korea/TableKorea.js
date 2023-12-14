import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table"

export default function TableKorea({
    kPlaces,
    deleteKPlace,
    updateKPlace,
    updatedKCity,
    updatedKPicture,
    handleUpdatedKCity,
    handleUpdatedKPicture
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
                {kPlaces.slice(0).reverse().map((kPlace, index) => (
                    <tr key={index}>
                        <td>{kPlace.kCity}</td>
                        <td>
                           <img 
                            src={kPlace.kPicture} 
                            alt={`Image of ${kPlace.kCity}`} 
                            style={{ width: '500px', height: '250px' }} 
                            /> 
                        </td>
                        <td>
                            <Button 
                                variant="outline-danger" 
                                onClick={() => deleteKPlace(kPlace.id)}
                            >
                                🗑
                            </Button>
                        </td>
                        <td>
                            <input 
                                value={updateKPlace.updatedKCity}
                                onChange={(e) => handleUpdatedKCity(e.target.value)}
                                placeholder='Enter New City'
                            />
                            <Button 
                                variant="outline-info"
                                onClick={(e) => updateKPlace(kPlace, 'kCity')}
                            >
                                📝
                            </Button>
                        </td>
                        <td>
                            <input 
                                value={updateKPlace.updatedKPicture}
                                onChange={(e) => handleUpdatedKPicture(e.target.value)}
                                placeholder='Enter New Picture'
                            />
                            <Button 
                                variant="outline-success"
                                type="submit"
                                onClick={(e) => updateKPlace(kPlace, 'kPicture')}
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