import React from 'react'

export default function Approvals() {
    return (
        <div className="card card-body">
            <h2 className="mb-3">Approvals</h2>
            <table className="table table-borderless table-hover ">
                <thead className="table-success">
                    <tr>
                        <th></th>
                        <th className="text-success">Document</th>
                        <th className="text-success">Submitted By:</th>
                        <th className="text-success">Assignatories:</th>
                        <th className="text-success">Signed By:</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col"><i className="fe fe-folder text-success"></i></th>
                        <td>ICPR</td>
                        <td>Jamel Eid Yassin</td>
                        <td>
                            <ul className="avatars-list">
                                <li>
                                    <a href="#!" className="avatar avatar-sm">
                                        <img alt="..." className="avatar-img rounded-circle" src="http://localhost:3000/assets/avatars/face-1.jpg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="avatar avatar-sm">
                                        <img alt="..." className="avatar-img rounded-circle" src="http://localhost:3000/assets/avatars/face-4.jpg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="avatar avatar-sm">
                                        <img alt="..." className="avatar-img rounded-circle" src="http://localhost:3000/assets/avatars/face-3.jpg" />
                                    </a>
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul className="avatars-list">
                                <li>
                                    <a href="#!" className="avatar avatar-sm">
                                        <img alt="..." className="avatar-img rounded-circle" src="http://localhost:3000/assets/avatars/face-1.jpg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="avatar avatar-sm">
                                        <img alt="..." className="avatar-img rounded-circle" src="http://localhost:3000/assets/avatars/face-4.jpg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="avatar avatar-sm">
                                        <img alt="..." className="avatar-img rounded-circle" src="http://localhost:3000/assets/avatars/face-3.jpg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="avatar avatar-sm">
                                        <img alt="..." className="avatar-img rounded-circle" src="http://localhost:3000/assets/avatars/face-7.jpg" />
                                    </a>
                                </li>
                            </ul>
                        </td>
                        <td>
                            <button className="btn btn-success mr-1">Approve</button>
                            <button className="btn btn-outline-dark mr-1">View Document</button>
                            <button className="btn btn-outline-danger mr-1">Reject</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
