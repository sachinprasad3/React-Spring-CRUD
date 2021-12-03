import React, {useState} from 'react'
import axios from "axios";



function Form() {   
    const [state, setState] = useState({
        empName : '',
        email : '',
        phone : ''
    })

    const submitHandler = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:9092/api/employees/',state)
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        console.log(state)

        setState({
            empName : '',
            email : '',
            phone : ''
        })
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Enter Name</label>
                <input type="text" name="empName" value={state.empName} onChange={e=>setState({...state, empName:e.target.value}) }/>
                <br />
                <label>Enter Email</label>
                <input type="email" name="email" value={state.email} onChange={e=>setState({...state, email:e.target.value})}/>
                <br />
                <label>Enter Phone</label>
                <input type="text" name="phone" value={state.phone} onChange={e=>setState({...state, phone:e.target.value})} maxLength="10"/>
                <br />
                <button>Add</button>
            </form>
            
            <h2>name : {state.empName}</h2>
            <h2>email : {state.email}</h2>
            <h2>phone : {state.phone}</h2>


        </>
    )
}

export default Form
