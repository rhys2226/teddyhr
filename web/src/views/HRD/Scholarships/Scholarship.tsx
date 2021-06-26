import React from 'react'
import { noData } from '../../../components/Alerts/Alert'
import { Auth } from '../../../services/auth.service'
import SupervisorPlaceholder from '../../Supervisor/SupervisorPlaceholder'


export default function Scholarship() {

    const [ scholarships, setscholarships ] = React.useState( [] )
    const [ filteredData, setFilteredData ] = React.useState( [] )
    const [ fetched, setfetched ]: any = React.useState( false )
    const user: any = localStorage.getItem( 'user' )
    const id = JSON.parse( user ).id
    const userData: any = localStorage.getItem( 'user' )
    const type = JSON.parse( userData ).Type


    React.useEffect( () => {
        getScholarships()
    }, [] )

    async function getScholarships() {
        const auth = new Auth( 'scholarships' );
        auth.fetch( {} ).then( ( data: any ) => {
            setscholarships( data )
            setFilteredData( data )
            setfetched( true )
        } )
    }

    const search = ( e: any ) => {
        const keyword = e.target.value
        keyword === '' ?
            setFilteredData( scholarships ) :
            setFilteredData( scholarships.filter(
                ( data: any ) =>
                    data.Title.toLowerCase().includes( keyword )
            ) )
    }

    const renderData = () => {
        noData()
        if ( scholarships.length === 0 ) {
            return <tr>
                <td className="text-center text-muted" colSpan={4}>No sholarships yet...</td>
            </tr>
        }
    }


    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Scholarships</h2>
                <p className="mb-3 text-muted">Displaying List of Sholarship in descending order</p>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="toolbar">
                            <div className="form-row">
                                <div className="form-group col-auto">
                                    <label className="sr-only">Search</label>
                                    <input onChange={( e ) => {
                                        // search( e )
                                    }} type="text" className="form-control" id="search1" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <table className="table">

                            <thead>
                                <tr>
                                    <th className="text-danger">#</th>
                                    <th className="text-danger"></th>
                                    <th className="text-danger">Title of Scholarship</th>
                                    <th className="text-danger">Availability</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <SupervisorPlaceholder show={!fetched} /> */}
                                {
                                    renderData()
                                }
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="circle circle-sm bg-light">
                                            <i className="fe fe-columns text-muted"></i>
                                        </div>
                                        <span className="dot dot-md bg-danger mr-1"></span>
                                    </td>
                                    <td>K-12</td>
                                    <td>
                                        <span className="badge badge-danger">Unavailable</span>
                                    </td>
                                    <th>
                                        <button style={{ display: type === 'Admin' ? '' : 'none' }} className="btn fe fe-24 fe-chevron-down" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="text-muted sr-only">Action</span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button
                                                onClick={() => {

                                                }}
                                                role="butoon" className="dropdown-item" >Remove Scholarship</button>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}
