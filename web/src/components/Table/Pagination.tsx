import React from 'react'

export default function Pagination( props: any ) {

    const [ currentPage, setCurrentPage ] = React.useState( 1 )

    async function changePage( page: number ) {
        setCurrentPage( page )

    }

    return (
        <nav aria-label="Table Paging" className="mb-0 text-muted" style={{ cursor: 'pointer' }}>
            <ul className="pagination justify-content-center mb-0">
                <li
                    className="page-item"
                    onClick={() => {
                        changePage( currentPage - 1 )
                    }}
                >
                    <button disabled={currentPage == 1 ? true : false} className="page-link">Previous</button>
                </li>
                {
                    props.Pages().map( ( page: number, index: number ) => (
                        <li key={index}
                            onClick={() => {
                                changePage( page )
                            }}
                            className={`page-item ${ currentPage == page ? 'active' : '' }`}>
                            <a className="page-link" >{page}</a>
                        </li>
                    ) )
                }
                <li onClick={() => {
                    changePage( currentPage + 1 )
                }}
                    className="page-item">
                    <button disabled={currentPage == props.Pages().length ? true : false} className="page-link" >Next</button>
                </li>
            </ul>
        </nav>
    )
}
