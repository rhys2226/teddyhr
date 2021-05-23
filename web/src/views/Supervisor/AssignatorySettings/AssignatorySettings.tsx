import React from 'react'

export default function AssignatorySettings() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 card p-5">
                <h2 className="mb-3">Assignatory Settings</h2>
                <table className="table table-borderless table-hover ">
                    <thead className="table-primary">
                        <tr>
                            <td></td>
                            <th className="text-primary">Document</th>
                            <th className="text-primary">Position</th>
                            <th>
                                <button className="btn btn-outline-primary">Add Approvals</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col"><i className="fe fe-folder text-primary"></i></th>
                            <td>ICPR</td>
                            <td>Administrative Officer 4</td>
                            <td>
                                <button className="btn btn-outline-danger">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
