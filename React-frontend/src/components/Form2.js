import React, {useState} from 'react'

function Form2(props) {   

       const [state, setState] = useState({
        empID : props.state ? props.state.empID : '',
        empName : props.state ? props.state.empName : '',
        email : props.state ? props.state.email : '',
        phone : props.state ? props.state.phone : ''
    })

    const submitHandler = (e) =>{
        e.preventDefault()
        props.handleSubmit(state)

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
                {props.state ? 
                (<>
                <button>Update</button>  
                </>) 
                
                : (<button>Add</button>)}
            </form>
            
            <h2>name : {state.empName}</h2>
            <h2>email : {state.email}</h2>
            <h2>phone : {state.phone}</h2>
        </>
    )
}

export default Form2
