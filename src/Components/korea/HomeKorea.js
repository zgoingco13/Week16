import React from "react";
import FormKorea from "./FormKorea";
import TableKorea from "./TableKorea";
import { useState, useEffect } from 'react';


export default function HomeKorea() {
    
    const MOCKAPI_URL_KOREA = 'https://6576a88b0fd5d07e432ec8f0.mockapi.io/korea'

    //use state function for STEP 1:GET
    const [kPlaces, setKPlaces] = useState([
        {
            kCity: '',
            kPicture: '',
        },
    ])

    //part of STEP 2:POST
    const [newKPlace, setNewKPlace] = useState({
        kCity: '',
        kPicture: ''
    })
    
    //STEP 2:POST
    function handleKCity(kCityValue) {
        setNewKPlace({
            ...newKPlace,
            kCity: kCityValue,
        })
    }
    function handleKPicture(kPictureValue) {
        setNewKPlace({
            ...newKPlace,
            kPicture: kPictureValue,
        })
    }

    //STEP 4: UPDATE
    const [updatedKCity, setUpdatedKCity] = useState('');
    function handleUpdatedKCity(updatedKCityValue) {
        console.log(updatedKCityValue);
        setUpdatedKCity(updatedKCityValue);
    }
    const [updatedKPicture, setUpdatedKPicture] = useState('');
    function handleUpdatedKPicture(updatedKPictureValue) {
        console.log(updatedKPictureValue);
        setUpdatedKPicture(updatedKPictureValue)
    }

    /////////////////////////////////////////////////////////////////////////////

    //fetch data from API then jsonified it and put it somewhere
    useEffect(() => { 
        fetch(MOCKAPI_URL_KOREA)
        .then((data) => data.json())
        .then((data) => setKPlaces(data))
    }, [])

    //STEP 1 Create and fetch or GET data from API w/ TableKorea.js
    const getKPlaces = () => {
        console.log('getting information for API')

        fetch(MOCKAPI_URL_KOREA)
        .then((data) => data.json())
        .then((data) => setKPlaces(data))
    }

    //STEP 2 with Form.js and POST new data
    const postKPlace = (e) => {
        e.preventDefault() //prevents auto-refreshing until user is ready
        console.log('posting new place')

        fetch(MOCKAPI_URL_KOREA, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newKPlace)
        }).then(() => getKPlaces()) //updates the state

        //resets and empties form field
        setNewKPlace({
            kCity: '',
            kPicture: ''
        })
    }

    //STEP 3 DELETE with delete button in TableKoreal component
    const deleteKPlace = (id) => {
        console.log(id);
        console.log('deleting adventure')
        
        //need to target specific place
        fetch(`${MOCKAPI_URL_KOREA}/${id}`, {
            method: 'DELETE'
        }).then(() => getKPlaces()) //update state
    }

    //STEP 4 UPDATE place on the table
    const updateKPlace = (kPlace, fieldToUpdate) => {
        console.log('updating place, pls hold')
        const updatedKPlace = {
            ...kPlace,
            kCity: fieldToUpdate === 'kCity' ? updatedKCity : kPlace.kCity,
        kPicture: fieldToUpdate === 'kPicture' ? updatedKPicture : kPlace.kPicture,
        };
        if (fieldToUpdate === 'kCity') {
            updatedKPlace.kCity = updatedKCity;
          } else if (fieldToUpdate === 'kPicture') {
            updatedKPlace.kPicture = updatedKPicture;
          }
        console.log(updatedKPlace)

        fetch(`${MOCKAPI_URL_KOREA}/${kPlace.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedKPlace)
        })
        .then(() => {
            getKPlaces();
            setUpdatedKCity('');
            setUpdatedKPicture('');
        })
        
    }

    //user information gets passed into table using property name user 
    //and set = to {kPlaces}
    return (
        <div>
            {/*destructing props*/}
            <FormKorea 
                newKPlace={newKPlace}
                postKPlace={postKPlace}
                handleKCity={handleKCity}
                handleKPicture={handleKPicture}
            />
            <TableKorea 
                handleUpdatedKCity={handleUpdatedKCity}
                handleUpdatedKPicture={handleUpdatedKPicture}
                updateKPlace={updateKPlace}
                deleteKPlace={deleteKPlace}
                kPlaces={kPlaces}
            />
        </div>
    )
}