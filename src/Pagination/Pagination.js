import React from 'react'
import ReactPaginate from 'react-paginate'
const Pagination = (props) =>{


    return (
        <div>
            <ReactPaginate
               previousLabel={"Previous"}
               nextLabel={"Next"}
               pageCount={props.pageCount}
               onPageChange={props.onClick}
               containerClassName={"paginationBttns"}
               previousLinkClassName={"previousBttn"}
               nextLinkClassName={"nextBttn"}
               disabledClassName={"paginationDisabled"}
               activeClassName={"paginationActive"}

      />
        </div>
    )
}

export default Pagination
