import React, { useState, useEffect } from 'react'
import Pagination from '../../../components/Table/Pagination'
import { Auth } from '../../../services/auth.service';
import EmployeeAndPerformancePlaceholders from '../Placeholders/EmployeeAndPerformancePlaceholders';

export default function EmployeesAndPerformance() {
    const [ performance, setPerformance ]: any = useState( [] )


    useEffect( () => {
        getTopEmployees()
    }, [] )


    function getTopEmployees() {
        const api = new Auth( 'employee-performances' )
        api.fetch( {} )
            .then( ( data: any ) => {
                setPerformance( data )
            } )
    }

    function setColor( rating: Number ) {
        if ( rating < 26 ) {
            return 'bg-danger'
        }
        if ( rating < 51 ) {
            return 'bg-warning'
        }
        if ( rating < 76 ) {
            return 'bg-success-lighter'
        }
        return 'bg-success'
    }


    return (
        <div className="col-md-8 my-4">
            <h2 className=" mb-1">
                <i className="fe fe-32 fe-bar-chart-2"></i>
                Employee Performance</h2>
            <p className="mb-3 text-muted">
                Displaying List of Employee's Performance in descending order</p>
            <div className="card ">
                <div className="card-body">
                    <div className="toolbar">

                    </div>
                    <table className="table ">
                        <thead className="table-warning">
                            <tr>
                                <th className="text-center text-warning"><i className="fe fe-user"></i></th>
                                <th className="text-warning">Name</th>
                                <th className="text-warning">Average Performance</th>
                                <th className="text-warning">Rating this Month</th>
                                <th className="text-warning text-center">Lowest Rating</th>
                                <th className="text-warning text-center">Highest Rating</th>
                                <th className="text-center text-dark"><i className="fe fe-user"></i></th>
                                <th className="text-dark">Immediate Supervisor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EmployeeAndPerformancePlaceholders show={performance.length !== 0 ? false : true} />
                            {
                                performance.map( ( employee: any, index: any ) => (
                                    <tr>
                                        <td className="text-center">
                                            <div className="avatar avatar-sm">
                                                <img src={employee.user.Avatar} alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                        </td>

                                        <td>
                                            <p className="mb-0 text-muted">
                                                <strong>
                                                    {employee.user.First + ' ' + employee.user.Middle + ' ' + employee.user.Last}
                                                </strong>
                                            </p>
                                            <p className="small mb-3"><span className="badge badge-success text-white p-1 br-2" style={{ fontWeight: 900, }}> Developer</span></p>
                                        </td>

                                        <td>
                                            <span className="mb-0">{employee.overAllRatings}%</span>
                                            <div className="progress my-2" style={{ height: "4px" }}>
                                                <div className={`progress-bar progress-bar-striped ${ setColor( employee.overAllRatings ) }`} role="progressbar" style={{ width: employee.overAllRatings + "%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
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
                                            <div className="avatar avatar-lg">
                                                <img src={employee.supervisors.Avatar} alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                        </td>

                                        <td>
                                            <p className="mb-0 text-muted">
                                                <strong>
                                                    {employee.supervisors.First + ' ' + employee.supervisors.Middle + ' ' + employee.supervisors.Last}
                                                </strong>
                                            </p>
                                            {/* <p className="small mb-3"><span className="badge badge-danger text-white p-1 br-2" style={{ fontWeight: 900, }}> MIS Director</span></p> */}
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
