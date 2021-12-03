import React, {useState, useEffect} from 'react'
import axios from "axios";
import ReactPaginate from 'react-paginate'
import './pagination.css'

function Paginataion() {
    const[posts, setPosts] = useState([])
    const[pageNumber, setPageNumber] = useState(0)
    const[pageSize, setPageSize] = useState(10)

    const postPerPage = pageSize
    const visitedPage = pageNumber * postPerPage

    const pageCount = Math.ceil(posts.length / postPerPage)

    const handleDelete = () =>{
        console.log("delete")
    }

    const displayPost = posts.slice(visitedPage, visitedPage + postPerPage).map(post =>{
        return(
            <div key={post.empID} className="card">
                <div className="card-body">
                    <p>Id : {post.empID}</p>
                    <p>name : {post.empName}</p>
                    <p>email : {post.email}</p>
                    <p>phone : {post.phone}</p>
                    <button onClick={handleDelete}>Delete</button>

                </div>                          
            </div>
        )
    })

    const pageChange = ({selected}) =>{
        setPageNumber(selected)
    }

    useEffect(()=>{
        axios.get('http://localhost:9092/api/employees')
            .then(res=>{
                console.log(res)
                setPosts(res.data)
            })
            .catch(e =>{
                console.log(e)
            })
    }, [])

    // const post = posts.slice(0, 50)


    return (
        <div>
        <span>
              <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
                {
                    [10,25,50].map(pageSize =>(
                        <option key={pageSize} value={pageSize}>
                            show {pageSize}
                        </option>
                    ))
                }
              </select>
           </span>
            {
                // posts.map((post) =>{
                //     return(
                //         <div key={post.id} className="card">
                //             <div className="card-body">
                //                 <p>Id : {post.id}</p>
                //                 <p>User Id : {post.userId}</p>
                //                 <p>Title : {post.title}</p>
                //             </div>                          
                //         </div>
                //     )
                // })

                displayPost
            }
            
            <div>
                Page {pageNumber + 1} of {pageCount}
            </div>
            
            <ReactPaginate
                previousLabel = {"PREVIOUS"}
                nextLabel = {"NEXT"}
                breakLabel={"***"}
                pageCount = {pageCount}
                onPageChange = {pageChange}
                disableInitialCallback = {true}
                marginPagesDisplayed = {2}
                // pageRangeDisplayed = {0}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                breakLinkClassName={"paginationBreak"}
            />
            
        </div>
    )
}

export default Paginataion
