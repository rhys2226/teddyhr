import React from 'react'
import {formatCurrency} from '../../helpers'

export default function Vacancies(props: any) {
    return (
        <div className="p-0 m-0 col-md-4">
            <div className="mb-0 shadow card ">
                <div className="card-body ">
                    <div className="my-2 card-text ">
                        <div className="d-flex">
                            <div className="mr-4 avatar avatar-xl">
                                <img
                                    src="https://iscofhr.online/assets/placeholders/dev.png"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                />
                            </div>
                            <div>
                                <strong className="my-0 card-title">
                                    {props.data.Position}
                                </strong>
                                <p className="mb-0 small">
                                    {props.data.Bureau}
                                </p>
                                <h5>
                                    <span className="p-2 mt-2 badge badge-info">
                                        Salary: {props.data.SalaryAuthorized}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer" style={{display: 'flex'}}>
                    <div className="m-2 row align-items-center justify-content-between">
                        <button
                            onClick={() => {
                                props.modal('apply')
                            }}
                            data-toggle="modal"
                            data-target=".modal-full"
                            className="mr-1 btn btn-danger">
                            Apply for {props.data.Position}
                        </button>
                        <button
                            onClick={() => {
                                props.modal('descriptions')
                            }}
                            data-toggle="modal"
                            data-target=".modal-full"
                            className="mr-1 btn btn-outline-info">
                            View Qualifications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
