import React, { useState, useEffect } from 'react'
import { Alert, Fire } from '../../../components/Alerts/Alert'
import Pagination from '../../../components/Table/Pagination'
import VacanciesPlaceholders from './VacanciesPlaceholders'

export default function Vacancies() {

    const [ employees, setApplicants ]: any = useState( [] )

    useEffect( () => {
        setTimeout( () => {
            setApplicants( [ 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, ] )
        }, 1000 );
    }, [] )

    return (
        <div className="col-md-12 my-4">
            <h2 className="h4 mb-1">Available Vacancies</h2>
            <p className="mb-3 text-muted">Displaying List of Vacancies in descending order</p>
            <div className="card shadow">
                <div className="card-body">
                    <div className="toolbar">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="sr-only">Search</label>
                                <input type="text" className="form-control" id="search1" value="" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <table className="table table-borderless table-hover">
                        <thead className="table-info">
                            <tr>
                                <th className="text-info text-center">#</th>
                                <th className="text-info">Bureau OR Office</th>
                                <th className="text-info">Position/Title</th>
                                <th className="text-info text-center">Department / Branch / Dviision</th>
                                <th className="text-info text-center">Salary Grade</th>
                                <th className="text-info text-center">Salary Authorized</th>
                                <th className="text-info text-center">Other Compensation</th>
                                <th className="text-info text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <VacanciesPlaceholders show={employees.length !== 0 ? false : true} />
                            {
                                employees.map( ( applicants: any, index: any ) => (
                                    <tr >
                                        <td className="text-center"> {index + 1} </td>

                                        <td className={`vacancy${ index }`}>Office of Management Information System </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" /></td>

                                        <td className={`vacancy${ index } text-info`}>
                                            <i className="fe fe-code"></i> Developer
                                        </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" /></td>


                                        <td className={`vacancy${ index } text-center`}> N/A </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" /></td>


                                        <td className={`vacancy${ index } text-center`}> N/A </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" /></td>


                                        <td className={`vacancy${ index } text-center`}> N/A </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" /></td>


                                        <td className={`vacancy${ index } text-center`}> N/A </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" /></td>


                                        <td className={`vacancy${ index }`}>
                                            <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted sr-only">Action</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button onClick={() => {
                                                    $( `.vacancy${ index }` ).toggle()
                                                    $( `.vacancy1${ index }` ).toggle()
                                                }} className="dropdown-item" >Edit</button>

                                                <button
                                                    onClick={() => {
                                                        Fire( 'Delete Vacancy', 'Are you sure you want to Delete this Vacancy?', 'warning', () => {
                                                            Alert( 'Vacancy Deleted', '', 'info' )
                                                        } )
                                                    }}
                                                    className="dropdown-item" >Remove</button>
                                                <button className="dropdown-item">View and Edit all</button>
                                            </div>
                                        </td>
                                        <td className={`vacancy1${ index } `} style={{ display: 'none' }}>
                                            <div className="d-flex">
                                                <button
                                                    onClick={() => {
                                                        Fire( 'Update Vacancy', 'Are you sure you want to Update this Vacancy?', 'info', () => {
                                                            Alert( 'Vacancy Updated', '', 'success' )
                                                            $( `.vacancy${ index }` ).toggle()
                                                            $( `.vacancy1${ index }` ).toggle()
                                                        } )
                                                    }} className="btn btn-sm btn-outline-primary" type="button"  >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        $( `.vacancy${ index }` ).toggle()
                                                        $( `.vacancy1${ index }` ).toggle()
                                                    }} className="btn btn-sm btn-outline-dark ml-2" type="button"  >
                                                    Cancel
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ) )
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination
                    Pages={() => {
                        let pages = []
                        for ( let index in employees ) {
                            pages.push( parseInt( index ) + 1 )
                        }
                        return pages
                    }}
                    callback={( callback: Function ) => {
                        callback()
                    }}
                />
                <br />
                <br />
            </div>
        </div>
    )
}
