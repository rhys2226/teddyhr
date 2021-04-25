import React, { useState, useEffect } from 'react'
import Pagination from '../../../components/Table/Pagination'
import axios from 'axios';
import * as base from '.././../../constants/base'
import { Alert, Fire } from '../../../components/Alerts/Alert';

export default function Employees() {
    const [ employees, setEmployees ] = useState( [] )

    useEffect( () => {
        getEmployees()
    }, [] )

    async function getEmployees() {
        const url = `${ base.api }HMRO`
        await axios.get( url )
            .then( ( response ) => {
                setEmployees( response.data )
            } )
    }

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className="h4 mb-1">Employees</h2>
                <p className="mb-3 text-muted">Displaying List of Employees in descending order</p>
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
                                    <th className="text-info"><i className="fe fe-user"></i></th>
                                    <th className="text-info">Name</th>
                                    <th className="text-info">Contact</th>
                                    <th className="text-info">Alignment</th>
                                    <th className="text-info text-center">Months of Services</th>
                                    <th className="text-info text-right">Hired Last</th>
                                    <th className="text-center"><i className="fe fe-user"></i></th>
                                    <th>Immediate Supervisor</th>
                                    <th className="text-info"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map( ( employee: any, index: any ) => (
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-sm">
                                                    <img src="http://localhost:3000/assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted"><strong>{employee.last_name}, {employee.first_name}   {employee.middle_name}</strong></p>
                                                <p className="small mb-3"><span className="badge badge-success text-white p-1 br-2" style={{ fontWeight: 900, }}>{employee.position}</span></p>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-primary ">@{employee.email}</p>
                                                <small className="mb-0 text-muted">{employee.phone}</small>
                                            </td>

                                            <td>{employee.alignment}</td>

                                            <td className=" text-center"> 15</td>

                                            <td className="text-muted text-right">13/09/2020</td>


                                            <td className="text-center">
                                                <div className="avatar avatar-md">
                                                    <img src="http://localhost:3000/assets/avatars/face-7.jpg" alt="..." className="avatar-img rounded-circle" />
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
                                                    <button role="butoon" className="dropdown-item" >Add/Change Supervisor</button>
                                                    <button role="butoon" className="dropdown-item" >View Profile</button>
                                                    <button role="butoon" className="dropdown-item" >Remove as Employee</button>
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
        </div >
    )
}
