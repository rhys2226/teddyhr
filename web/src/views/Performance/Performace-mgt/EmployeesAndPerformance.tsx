import React, { useState } from 'react'
import Pagination from '../../../components/Table/Pagination'

export default function EmployeesAndPerformance() {
    const [ employees, setApplicants ] = useState( [ 1, 2, 3, 2, 3, ] )
    return (
        <div className="col-md-8 my-4">
            <h2 className="h4 mb-1">Employee Performance</h2>
            <p className="mb-3 text-muted">Displaying List of Employee's Performance in descending order</p>
            <div className="card shadow">
                <div className="card-body">
                    <div className="toolbar">
                        <form className="form">
                            <div className="form-row">
                                <div className="form-group col-auto mr-auto">
                                    <label className="my-1 mr-2 sr-only" >Show</label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelectPref1">
                                        <option >All</option>
                                        <option>Subordiante</option>
                                        <option>Colleagues</option>
                                    </select>
                                </div>
                                <div className="form-group col-auto">
                                    <label className="sr-only">Search</label>
                                    <input type="text" className="form-control" id="search1" value="" placeholder="Search" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <table className="table table-borderless table-hover">
                        <thead>
                            <tr>
                                <th className="text-center"><i className="fe fe-user"></i></th>
                                <th >Name</th>
                                <th className="text-muted">Average Performance</th>
                                <th className="text-muted">Rating this Month</th>
                                <th className="text-muted text-center">Lowest Rating</th>
                                <th className="text-muted text-center">Highest Rating</th>
                                <th className="text-center"><i className="fe fe-user"></i></th>
                                <th>Immediate Supervisor</th>
                                <th className="text-danger"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map( ( applicants: any, index: any ) => (
                                    <tr>
                                        <td className="text-center">
                                            <div className="avatar avatar-md">
                                                <img src="./assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                        </td>

                                        <td>
                                            <p className="mb-0 text-muted"><strong>Fuentevilla, Teddy D.</strong></p>
                                            <p className="small mb-3"><span className="badge badge-success text-white p-1 br-2" style={{ fontWeight: 900, }}> Developer</span></p>
                                        </td>

                                        <td>
                                            <span className="mb-0">5%</span>
                                            <div className="progress my-2" style={{ height: "4px" }}>
                                                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td>

                                        <td>
                                            <span className="mb-0">5%</span>
                                            <div className="progress my-2" style={{ height: "4px" }}>
                                                <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td>

                                        <td>
                                            <span className="mb-0">5%</span>
                                            <div className="progress my-2" style={{ height: "4px" }}>
                                                <div className="progress-bar  progress-bar-striped bg-danger" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td>

                                        <td>
                                            <span className="mb-0">35%</span>
                                            <div className="progress my-2" style={{ height: "4px" }}>
                                                <div className="progress-bar progress-bar-striped bg-success" style={{ width: "35%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td>

                                        <td className="text-center">
                                            <div className="avatar avatar-md">
                                                <img src="./assets/avatars/face-8.jpg" alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                        </td>

                                        <td>
                                            <p className="mb-0 text-muted"><strong>Agsaluna, Ryan D.</strong></p>
                                            <p className="small mb-3"><span className="badge badge-danger text-white p-1 br-2" style={{ fontWeight: 900, }}> Developer</span></p>
                                        </td>

                                        <td>
                                            <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted sr-only">Action</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button className="dropdown-item" >Rate Employee</button>
                                            </div>
                                        </td>

                                    </tr>
                                ) )
                            }
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
