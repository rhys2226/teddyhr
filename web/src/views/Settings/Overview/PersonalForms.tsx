import React from 'react'

export default function PersonalForms() {
    return (
        <div className="col-md-12  mt-2">
            <br />
            <h6 className="mb-3">Personal Forms</h6>
            <table className="table table-borderless table-striped ">
                <thead className="table-success">
                    <tr role="row">
                        <th className="text-success">..</th>
                        <th className="text-success">Name</th>
                        <th className="text-success">Date Uploaded</th>
                        <th className="text-success">Last Updated</th>
                        <th className="text-success"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col"><i className="fe fe-folder text-warning"></i></th>
                        <td>Personal Data Sheet</td>
                        <td>2020-12-26 01:32:21</td>
                        <td>2020-12-26 01:32:21</td>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-muted sr-only">Action</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <a className="dropdown-item" href="#">View</a>
                                    <a className="dropdown-item" href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col"><i className="fe fe-folder text-warning"></i></th>
                        <td>ICPR</td>
                        <td>2020-12-26 01:32:21</td>
                        <td>2020-12-26 01:32:21</td>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-muted sr-only">Action</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <a className="dropdown-item" href="#">View</a>
                                    <a className="dropdown-item" href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
