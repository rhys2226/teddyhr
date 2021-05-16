import React from 'react'
import Pagination from '../../../../components/Table/Pagination'

export default function Leaves() {

    return (
        <div>
            <h6 className="mb-3">Leaves</h6>
            <table className="table table-borderless table-striped ">
                <thead className="table-success">
                    <tr role="row">
                        <th className="text-success">..</th>
                        <th className="text-success">Type</th>
                        <th className="text-success">Days</th>
                        <th className="text-success">With Pay</th>
                        <th className="text-success">From</th>
                        <th className="text-success">To</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">
                            <div className="circle circle-sm bg-light">
                                <i className="fe fe-truck text-muted"></i>
                            </div>
                            <span className="dot dot-md bg-success mr-1"></span>
                        </th>
                        <td>Sick Leave</td>
                        <td>5</td>
                        <td><span className="text-success">Yes</span></td>
                        <td>July 5, 2021</td>
                        <td>July 10, 2021</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
