import React from 'react'
import { Alert, Fire } from '../../components/Alerts/Alert'
import LargeModal from '../../components/Modals/LargeModal'
import Pagination from '../../components/Table/Pagination'
import Subordinates from './Subordinates'
import SupervisorPlaceholder from './SupervisorPlaceholder'


export default function Supervisor() {

    const [ add, setAdd ] = React.useState( false )

    const [ supervisors, setsupervisors ]: any = React.useState( [] )

    React.useEffect( () => {
        setTimeout( () => {
            setsupervisors( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] )
        }, 1000 );
    }, [] )

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Supervisors</h2>
                <p className="mb-3 text-muted">Displaying List of Supervisors and their subordinates</p>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="toolbar">
                            <div className="form-row">
                                <div className="form-group col-auto">
                                    <label className="sr-only">Search</label>
                                    <input type="text" className="form-control" id="search1" value="" placeholder="Search" />
                                </div>
                                <div className="form-group col-auto">
                                    <button
                                        onClick={() => {
                                            setAdd( add === false ? true : false )
                                        }}
                                        className="btn btn-outline-primary d-flex">
                                        <i className="fe fe-plus"></i>
                                           &nbsp; {add === false ? 'New Subordinate' : 'Cancel'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <table className="table table-borderless table-hover">
                            <thead>
                                <tr>
                                    <th className="text-secondary"><i className="fe fe-pause"></i> &nbsp; Department</th>
                                    <th className="text-primary text-center"><i className="fe fe-user"></i></th>
                                    <th className="text-primary">Supervisor</th>
                                    <th className="text-info"></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <SupervisorPlaceholder show={supervisors.length !== 0 ? false : true} />
                                <tr style={{ display: add === true ? 'table-row' : 'none' }}>
                                    <td> <input className="form-control" /></td>
                                    <td></td>
                                    <td>
                                        <select className="form-control">
                                            <option selected disabled>Choose..</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className="form-control">
                                            <option selected disabled>Choose..</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                Fire( 'Add Subordinate', 'Are you sure you want to add Employee on MIS?', 'warning', () => {
                                                    Alert( 'Employee Added to MIS', '', 'info' )
                                                    setAdd(
                                                        add === false ? true : false
                                                    )
                                                } )
                                            }}
                                            className="btn btn-primary">Submit
                                                    </button>
                                    </td>
                                </tr>
                                {
                                    supervisors.map( ( supervisor: any, index: number ) => (
                                        <tr>
                                            <td> <i className="fe fe-pause"></i> &nbsp; Management Information System</td>
                                            <td className="text-center">
                                                <div className="avatar avatar-md">
                                                    <img src="http://localhost:3000/assets/avatars/face-7.jpg" alt="..." className="avatar-img rounded-circle" />
                                                </div>
                                            </td>
                                            <td> Ryan Agsaluna </td>
                                            <td>
                                                <button
                                                    data-toggle='modal'
                                                    data-target=".large-modal"
                                                    className="btn btn-outline-info "
                                                    type="button">
                                                    View Subordinates
                                                </button>

                                            </td>
                                            <td></td>
                                        </tr>
                                    ) )
                                }
                            </tbody>
                        </table>
                        <br />
                        <Pagination
                            Pages={() => {
                                let pages = []
                                for ( let index in [ 1, 2, 3, 4, 5, 6 ] ) {
                                    pages.push( parseInt( index ) + 1 )
                                }
                                return pages
                            }}
                            callback={( callback: Function ) => {
                                callback()
                            }}
                        />
                    </div>
                </div>
            </div>
            <LargeModal>
                <Subordinates />
            </LargeModal>
        </div >
    )
}