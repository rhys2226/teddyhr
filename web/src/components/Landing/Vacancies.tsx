import React from 'react'
import { formatCurrency } from '../../helpers'

export default function Vacancies( props: any ) {
    return (
        <div className="col-md-4 m-0 p-0">
            <div className="card shadow mb-0 ">
                <div className="card-body ">
                    <div className="card-text my-2 ">
                        <div className="d-flex">
                            <div className="avatar avatar-xl mr-4">
                                <img src="http://localhost:3000/assets/placeholders/dev.png" alt="..." className="avatar-img rounded-circle" />
                            </div>
                            <div>
                                <strong className="card-title my-0">{props.data.Position}</strong>
                                <p className="small  mb-0">{props.data.Bureau}</p>
                                <h5><span className="badge badge-info p-2 mt-2">Salary: {formatCurrency( props.data.SalaryAuthorized )}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer" style={{ display: 'flex', }}>
                    <div className="row align-items-center justify-content-between  m-2">
                        <button
                            onClick={() => {
                                props.modal( 'apply' )
                            }}
                            data-toggle="modal" data-target=".modal-full" className="btn btn-danger mr-1">Apply Now</button>
                        <button
                            onClick={() => {
                                props.modal( 'descriptions' )
                            }}
                            data-toggle="modal" data-target=".modal-full" className="btn btn-outline-info mr-1">View Qualifications</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
