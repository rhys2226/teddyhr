import React from 'react'
import {formatCurrency} from '../../helpers'

export default function Vacancies(props: any) {
    return (
        <div className="p-0 m-0 ">
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
                                    <span className="p-2 mt-2 badge t-bg-emerald-200 t-text-emerald-700 t-font-bold">
                                        PHP {props.data.SalaryAuthorized}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer" style={{display: 'flex'}}>
                    <div className=" align-items-center t-grid t-grid-cols-2 t-w-full">
                        <button
                            onClick={() => {
                                props.modal('apply')
                            }}
                            data-toggle="modal"
                            data-target=".modal-full"
                            className="t-mr-4 t-py-2.5 t-bg-sky-600 t-text-white hover:t-bg-blue-600 t-rounded-md">
                            Easy Apply
                        </button>

                        <button
                            onClick={() => {
                                props.modal('descriptions')
                            }}
                            data-toggle="modal"
                            data-target=".modal-full"
                            className="mr-1    t-py-2.5 t-border  t-rounded-md ">
                            See more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
