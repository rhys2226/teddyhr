import React from 'react'
import Pagination from '../../components/Table/Pagination'
import Subordinates from './Subordinates'


export default function Supervisor() {

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className="h4 mb-1">Supervisors</h2>
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
                                        }}
                                        className="btn btn-outline-primary">Add Subordinate</button>
                                </div>
                            </div>
                        </div>
                        <table className="table table-borderless table-hover">
                            <thead>
                                <tr>
                                    <th className="text-dark">Department</th>
                                    <th className="text-primary">Supervisor</th>
                                    <th className="text-info">Subordiante</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <input className="form-control" /></td>
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
                                </tr>
                                <tr>
                                    <td> <i className="fe fe-cpu"></i> MIS</td>
                                    <td>
                                        <div className="avatar avatar-sm">
                                            <img src="http://localhost:3000/assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                            Ryan Agsaluna
                                        </td>
                                    <td>
                                        <button className="btn btn-outline-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Subordinates
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right mt-2">
                                            <Subordinates />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div >
    )
}