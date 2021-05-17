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
                            {
                                employees.map( ( applicants: any, index: any ) => (
                                    <tr>
                                        <td className="text-center"> {index + 1} </td>
                                        <td>Office of Management Information System </td>

                                        <td>
                                            <p className=" mb-3"><span className="text-danger bold p-1 br-2" > Developer</span></p>
                                        </td>
                                        <td className="text-center"> N/A </td>
                                        <td className="text-center"> N/A </td>
                                        <td className="text-center"> N/A </td>
                                        <td className="text-center"> N/A </td>
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
