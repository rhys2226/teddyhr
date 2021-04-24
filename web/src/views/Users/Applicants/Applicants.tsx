import React, { useState } from 'react'

export default function Applicants() {
    const [ applicants, setApplicants ] = useState( [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ] )

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className="h4 mb-1">Applicants</h2>
                <p className="mb-3 text-muted">Displaying applicants in descending order</p>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="toolbar">
                            <form className="form">
                                <div className="form-row">
                                    <div className="form-group col-auto mr-auto">
                                        <label className="my-1 mr-2 sr-only" >Show</label>
                                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelectPref1">
                                            <option value="">...</option>
                                            <option value="1">12</option>
                                            <option value="2" selected>32</option>
                                            <option value="3">64</option>
                                            <option value="3">128</option>
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
                                    <th className="text-danger">ID</th>
                                    <th className="text-danger">Applicant</th>
                                    <th className="text-danger">Prev Employer</th>
                                    <th className="text-danger">Contact</th>
                                    <th className="w-25 text-danger">Degrees </th>
                                    <th className="text-danger">Alignment</th>
                                    <th className="text-danger">DSS Status</th>
                                    <th className="text-danger">Application Date</th>
                                    <th className="text-danger"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applicants.map( ( applicants: any, index: any ) => (
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-sm">
                                                    <img src="http://localhost:3000/assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted"><strong>Fuentevilla, Teddy D.</strong></p>
                                                <p className="small mb-3"><span className="badge badge-dark p-1 br-2" style={{ fontWeight: 900, }}>as Developer</span></p>
                                            </td>

                                            <td>
                                                <p className="mb-0 ">John Doe</p>
                                                <small className="mb-0 text-muted">0928-624-1875</small>
                                            </td>

                                            <td>
                                                <p className="mb-0 ">0928-624-1875</p>
                                                <small className="mb-0 text-muted">teddy@gmail.com</small>
                                            </td>


                                            <td className="w-25">
                                                <small > Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology
                                        </small>
                                            </td>

                                            <td>Vertical</td>

                                            <td>
                                                <span className="badge badge-success text-white rounded p-2 br-2"
                                                    style={{ fontWeight: 900, }}>Qualified</span>
                                            </td>

                                            <td className="text-muted">13/09/2020</td>

                                            <td>
                                                <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted sr-only">Action</span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" >View Information</a>
                                                    <a className="dropdown-item" >Check Supporting Documents</a>
                                                    <a className="dropdown-item" >Reject</a>
                                                    <a className="dropdown-item">Schedule an Interview</a>
                                                </div>
                                            </td>
                                        </tr>

                                    ) )
                                }


                            </tbody>
                        </table>
                        <nav aria-label="Table Paging" className="mb-0 text-muted">
                            <ul className="pagination justify-content-center mb-0">
                                <li className="page-item"><a className="page-link">Previous</a></li>
                                <li className="page-item"><a className="page-link" >1</a></li>
                                <li className="page-item active"><a className="page-link" >2</a></li>
                                <li className="page-item"><a className="page-link" >3</a></li>
                                <li className="page-item"><a className="page-link" >Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div >
    )
}
