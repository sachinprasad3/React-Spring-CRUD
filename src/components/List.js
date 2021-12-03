import React from 'react'
import {Link} from 'react-router-dom'


function List({lists, deleteEmployee}) {

    return lists.map((emp) => (
        <tr key={emp.empID}>
            <td><p>{emp.empID}</p></td>
            <td><p>{emp.empName}</p></td>
            <td><p>{emp.email}</p></td>
            <td><p>{emp.phone}</p></td>
            <td><button onClick={() => deleteEmployee(emp.empID)}>Delete</button>
            {/* <button onClick={() => updateEmp(emp.empID)}>Edit</button> */}
            <Link to={`/update/${emp.empID}`}>Update</Link></td>
        </tr>
        
    ))
}

export default List
