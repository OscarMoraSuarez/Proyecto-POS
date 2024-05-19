import React from 'react'


export const Pagination = ({ pages,currentPage, setCurrentPage, /* requestPage, */ /* setRequestPage */ }) => {

    const pageItems = [];

    for (let i = 1; i <= pages; i++) {
        pageItems.push(i);

    }

    
    const onSetPage=(pageNumber)=>{
        setCurrentPage(prevPage=>pageNumber);
        /* setRequestPage(prevRequestPage=>currentPage-1) */
    }
    
    console.log('currentPage',currentPage)
    /* console.log('requestPage', requestPage) */

    return (
        <>
            <div className='d-flex flex-column align-items-center mt-3'>
                <div>
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">&laquo;</a>
                        </li>

                        {
                            pageItems.map((item, index) => (
                            <li 
                                key={index } 
                                className="page-item"
                                onClick={()=>onSetPage(item)}
                                >
                                <a className="page-link" href="#">{item}</a>
                            </li>)

                            )
                        }

                        <li className="page-item">
                            <a className="page-link" href="#">&raquo;</a>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}
