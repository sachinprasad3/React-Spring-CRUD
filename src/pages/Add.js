import React from 'react'
import Form2 from '../components/Form2'
import axios from 'axios'
import {toast} from 'react-toastify'


function Add() {

    const handleSubmit = (state) =>{
        console.log(state)
        axios.post('http://localhost:9092/api/employees/',state)
            .then(function (response) {
                console.log(response);
                toast.success("added successfully...");
              })
              .catch(function (error) {
                console.log(error);
                toast.error("womething went wrong");
              })
    }
    return (
        <div>
            <h2>Add Item</h2>
            <Form2 handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Add
