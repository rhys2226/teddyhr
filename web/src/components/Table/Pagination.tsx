import React from 'react'

export default function Pagination() {
    return (
        <nav aria-label="Table Paging" className="mb-0 text-muted">
            <ul className="pagination justify-content-center mb-0">
                <li className="page-item"><a className="page-link">Previous</a></li>
                <li className="page-item"><a className="page-link" >1</a></li>
                <li className="page-item active"><a className="page-link" >2</a></li>
                <li className="page-item"><a className="page-link" >3</a></li>
                <li className="page-item"><a className="page-link" >Next</a></li>
            </ul>
        </nav>
    )
}
