import React, {useState, useEffect} from 'react'
import axios from 'axios'
import List from './List'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import './EmployeeList.css'


function EmployeeList() {
    const [emp, setEmp] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9092/api/employees')
            .then(res=>{
                console.log(res)
                setEmp(res.data)
            })
            .catch(e =>{
                console.log(e)
            })
    }, [])


    const deleteEmployee = (id) =>{
        axios.delete(`http://localhost:9092/api/employees/${id}`)
            .then(()=>{
                const deletedList = [...emp].filter(l=>l.empID !== id)
                // console.log(deletedList)
                setEmp(deletedList)
                toast.success("deleted...")
            })
    }
    
    return (
        <div>
            <Link to="/add">Add</Link>
            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp Email</th>
                            <th>Emp Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <List lists={emp} deleteEmployee={deleteEmployee}/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeList
