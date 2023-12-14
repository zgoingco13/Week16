import React from "react";
import FormJapan from "./FormJapan";
import TableJapan from "./TableJapan";
import { useState, useEffect } from 'react';


export default function HomeJapan() {
    
    const MOCKAPI_URL_JAPAN = 'https://6576a88b0fd5d07e432ec8f0.mockapi.io/japan'

    //use state function for STEP 1:GET
    const [jPlaces, setJPlaces] = useState([
        {
            jCity: '',
            jPicture: '',
        },
    ])

    //part of STEP 2:POST
    const [newJPlace, setNewJPlace] = useState({
        jCity: '',
        jPicture: ''
    })
    
    //STEP 2:POST
    function handleJCity(jCityValue) {
        setNewJPlace({
            ...newJPlace,
            jCity: jCityValue,
        })
    }
    function handleJPicture(jPictureValue) {
        setNewJPlace({
            ...newJPlace,
            jPicture: jPictureValue,
        })
    }

    //STEP 4: UPDATE
    const [updatedJCity, setUpdatedJCity] = useState('');
    function handleUpdatedJCity(updatedJCityValue) {
        console.log(updatedJCityValue);
        setUpdatedJCity(updatedJCityValue);
    }
    const [updatedJPicture, setUpdatedJPicture] = useState('');
    function handleUpdatedJPicture(updatedJPictureValue) {
        console.log(updatedJPictureValue);
        setUpdatedJPicture(updatedJPictureValue)
    }

    /////////////////////////////////////////////////////////////////////////////

    //fetch data from API then jsonified it and put it somewhere
    useEffect(() => { 
        fetch(MOCKAPI_URL_JAPAN)
        .then((data) => data.json())
        .then((data) => setJPlaces(data))
    }, [])

    //STEP 1 Create and fetch or GET data from API w/ TableJapan.js
    const getJPlaces = () => {
        console.log('getting information for API')

        fetch(MOCKAPI_URL_JAPAN)
        .then((data) => data.json())
        .then((data) => setJPlaces(data))
    }

    //STEP 2 with Form.js and POST new data
    const postJPlace = (e) => {
        e.preventDefault() //prevents auto-refreshing until user is ready
        console.log('posting new place')

        fetch(MOCKAPI_URL_JAPAN, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newJPlace)
        }).then(() => getJPlaces()) //updates the state

        //resets and empties form field
        setNewJPlace({
            jCity: '',
            jPicture: ''
        })
    }

    //STEP 3 DELETE with delete button in TableJapanl component
    const deleteJPlace = (id) => {
        console.log(id);
        console.log('deleting adventure')
        
        //need to target specific place
        fetch(`${MOCKAPI_URL_JAPAN}/${id}`, {
            method: 'DELETE'
        }).then(() => getJPlaces()) //update state
    }

    //STEP 4 UPDATE place on the table
    const updateJPlace = (jPlace, fieldToUpdate) => {
        console.log('updating place, pls hold')
        const updatedJPlace = {
            ...jPlace,
            jCity: fieldToUpdate === 'jCity' ? updatedJCity : jPlace.jCity,
        jPicture: fieldToUpdate === 'jPicture' ? updatedJPicture : jPlace.jPicture,
        };
        if (fieldToUpdate === 'jCity') {
            updatedJPlace.jCity = updatedJCity;
          } else if (fieldToUpdate === 'jPicture') {
            updatedJPlace.jPicture = updatedJPicture;
          }
        console.log(updatedJPlace)

        fetch(`${MOCKAPI_URL_JAPAN}/${jPlace.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedJPlace)
        })
        .then(() => {
            getJPlaces();
            setUpdatedJCity('');
            setUpdatedJPicture('');
        })
        
    }

    //user information gets passed into table using property name user 
    //and set = to {jPlaces}
    return (
        <div>
            {/*destructing props*/}
            <FormJapan 
                newJPlace={newJPlace}
                postJPlace={postJPlace}
                handleJCity={handleJCity}
                handleJPicture={handleJPicture}
            />
            <TableJapan 
                handleUpdatedJCity={handleUpdatedJCity}
                handleUpdatedJPicture={handleUpdatedJPicture}
                updateJPlace={updateJPlace}
                deleteJPlace={deleteJPlace}
                jPlaces={jPlaces}
            />
        </div>
    )
}