import React, {useState, useEffect,} from 'react'
import Form2 from '../components/Form2'
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'


function Update() {
    const [empState, setEmpState] = useState({
        empID : '',
        empName : '',
        email : '',
        phone : ''
    })

    let navigate = useNavigate();

    let param = useParams()
    console.log(param.id)

    //getting data of passing id
    useEffect(()=>{
        axios.get(`http://localhost:9092/api/employees/${param.id}`)
        .then(res=>{
            console.log(res)
            setEmpState(res.data)
            //setEdit(true)
        })
        .catch(e =>{
            console.log(e)
        })
    }, [param.id])


    //updating data
    const handleUpdate = (state) =>{
        console.log("afte handle submit")
        console.log(state)

        axios.put("http://localhost:9092/api/employees",state)
        .then(function (response) {
            console.log(response);
            toast.success("Updated Successfully...")
            navigate(`/view`)           
        })
        .catch(e =>{
            console.log(e)
            toast.error("womething went wrong");
        })
    }


    return (
        <div>
            <h3>Update</h3>
            { empState.empID  && <Form2 state={empState} handleSubmit={handleUpdate } />}           
        </div>
    )
}

export default Update
