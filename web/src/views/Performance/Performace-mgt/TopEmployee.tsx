import React, { useState } from 'react'
import Pagination from '../../../components/Table/Pagination'
export default function TopEmployee() {
    const [ employees, setApplicants ] = useState( [ 1, 2, 3, 2, 3, ] )
    return (
        <div className="col-md-4 my-4">
            <h2 className="h4 mb-1">Employees of the month</h2>
            <p className="mb-3 text-muted">Displaying List of Top Employees this Month</p>
            <div className="card shadow">
                <div className="card-body">
                    <table className="table table-borderless table-hover mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="text-center"><i className="fe fe-user"></i></th>
                                <th >Name</th>
                                <th className="text-muted">Rating this Month</th>
                                <th>Immediate Supervisor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map( ( applicants: any, index: any ) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td className="text-center">
                                            <div className="avatar avatar-md">
                                                <img src="http://localhost:3000/assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                        </td>

                                        <td>
                                            <p className="mb-0 text-muted"><strong>Fuentevilla, Teddy D.</strong></p>
                                            <p className="small mb-3"><span className="badge badge-success text-white p-1 br-2" style={{ fontWeight: 900, }}>Developer</span></p>
                                        </td>

                                        <td>
                                            <span className="mb-0">100%</span>
                                            <div className="progress my-2" style={{ height: "4px" }}>
                                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </td>


                                        <td>
                                            <p className="mb-0 text-muted"><strong>Agsaluna, Ryan D.</strong></p>
                                            <p className="small mb-3"><span className="badge badge-dark text-white p-1 br-2" style={{ fontWeight: 900, }}>Director</span></p>
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
