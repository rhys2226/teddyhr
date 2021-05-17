import React, { useState } from 'react'
import { Fire } from '../../../components/Alerts/Alert'
import LargeModal from '../../../components/Modals/LargeModal'
import Pagination from '../../../components/Table/Pagination'
import ApplicantINformation from './ApplicantINformation'
import ApplicantSupportingDocument from './ApplicantSupportingDocument'

export default function Applicants() {
    const [ applicants, setApplicants ] = useState( [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ] )

    const [ modal, setModal ] = useState( ApplicantINformation )

    function changeModal( type: number ) {
        if ( type === 1 ) {
            setModal(
                <ApplicantINformation />
            )
            return
        }
        setModal(
            <ApplicantSupportingDocument />
        )
    }

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
                                    <div className="form-group col-auto">
                                        <label className="sr-only">Search</label>
                                        <input type="text" className="form-control" id="search1" value="" placeholder="Search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <table className="table table-borderless table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th className="text-info text-center"><i className="fe fe-user"></i></th>
                                    <th className="text-info">Applicant</th>
                                    <th className="text-info">Prev Employer</th>
                                    <th className="text-info">Contact</th>
                                    <th className="w-25 text-info">Degrees </th>
                                    <th className="text-info">Alignment</th>
                                    <th className="text-info">DSS Status</th>
                                    <th className="text-info">Application Date</th>
                                    <th className="text-info"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applicants.map( ( applicants: any, index: any ) => (
                                        <tr>
                                            <td className="text-center">
                                                <div className="avatar avatar-xl">
                                                    <img src="http://localhost:3000/assets/avatars/face-7.jpg" alt="..." className="avatar-img rounded-circle" />
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
                                                <button className="btn btn-dark btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted sr-only">Action</span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">

                                                    <button
                                                        onClick={() => {
                                                            changeModal( 1 )
                                                        }}
                                                        data-target="#large-modal"
                                                        className="dropdown-item" >  View Information </button>

                                                    <button
                                                        onClick={() => {
                                                            changeModal( 2 )
                                                        }}
                                                        data-target="#large-modal"
                                                        className="dropdown-item" > Check Supporting Documents </button>

                                                    <button
                                                        onClick={() => {
                                                            Fire( 'Reject', 'Are you sure you want to Reject this applicant?', 'warning', () => { } )
                                                        }}
                                                        className="dropdown-item" >Reject</button>

                                                    <button
                                                        onClick={() => {
                                                            Fire( 'Schedule an Interview', 'Are you sure you want to Schedule an Interview?', 'info', () => { } )
                                                        }}
                                                        className="dropdown-item">Schedule an Interview</button>
                                                </div>
                                            </td>
                                        </tr>

                                    ) )
                                }
                            </tbody>
                        </table>
                        <Pagination
                            Pages={() => {
                                let pages = []
                                for ( let index in applicants ) {
                                    pages.push( parseInt( index ) + 1 )
                                }
                                return pages
                            }}
                            callback={( callback: Function ) => {
                                callback()
                            }}
                        />
                    </div>
                </div>
            </div>

            <LargeModal>
                {modal}
            </LargeModal>
        </div >
    )
}


