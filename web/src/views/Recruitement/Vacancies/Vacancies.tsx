import React, { useState } from 'react'
import Pagination from '../../../components/Table/Pagination'

export default function Vacancies() {
    const [ employees, setApplicants ] = useState( [ 1, 2, 3, 2, 3, ] )
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
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th >Vacancy Name</th>
                                <th className="text-muted">Office</th>
                                <th className="text-muted text-center">Seniority Level</th>
                                <th className="text-muted text-center">Minimum Experience <br />(months)</th>
                                <th className="text-muted text-center">Employment Type</th>
                                <th className="text-muted text-center">Industry</th>
                                <th className="text-muted text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map( ( applicants: any, index: any ) => (
                                    <tr>
                                        <td className="text-center"> {index + 1} </td>

                                        <td>
                                            <p className="small mb-3"><span className="badge bg-danger-lighter  text-danger p-1 br-2" style={{ fontWeight: 900, }}> Developer</span></p>
                                        </td>

                                        <td>Office of Management Information System </td>
                                        <td className="text-center"> Junior </td>
                                        <td className="text-center"> 5 </td>
                                        <td className="text-center"> Regular </td>
                                        <td className="text-center"> Information Technology </td>
                                        <td>
                                            <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted sr-only">Action</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" >Edit</a>
                                                <a className="dropdown-item" >Remove</a>
                                            </div>
                                        </td>
                                    </tr>
                                ) )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
