import React from 'react'

export default function LeaveSettings() {
    return (
        <div>
            <h6 className="mb-3">Leave Setting</h6>
            <table className="table table-borderless table-striped ">
                <thead className="table-success">
                    <tr role="row">
                        <th className="text-success">..</th>
                        <th className="text-success">Type</th>
                        <th className="text-success">Next Credit days</th>
                        <th className="text-success">With Pay</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">
                            <div className="circle circle-sm bg-light">
                                <i className="fe fe-tool text-muted"></i>
                            </div>
                            <span className="dot dot-md bg-success mr-1"></span>
                        </th>
                        <td>
                            <select className="form-control">
                                <option>Vacation</option>
                                <option>Sick</option>
                                <option>Maternity</option>
                                <option>Special Privilege</option>
                                <option>Others, specify</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="col">
                            <div className="circle circle-sm bg-light">
                                <i className="fe fe-tool text-muted"></i>
                            </div>
                            <span className="dot dot-md bg-success mr-1"></span>
                        </th>
                        <td>Sick Leave</td>
                        <td>30 days</td>
                        <td><span className="text-success">Yes</span></td>
                        <td>
                            <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button role="butoon" className="dropdown-item" >Edit</button>
                                <button role="butoon" className="dropdown-item" >Remove</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
