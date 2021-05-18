import React from 'react'

export default function Vacancies( props: any ) {
    return (
        <div className="col-md-3">
            <div className="card shadow mb-5 mt-5">
                <div className="card-body text-center">
                    <div className="avatar avatar-lg mt-4">
                        <span className="avatar avatar-sm mt-2">
                            <img src="./assets/placeholders/dev.png" alt="..." className="avatar-img rounded-circle" />
                        </span>
                    </div>
                    <div className="card-text my-2 ">
                        <strong className="card-title my-0">Developer</strong>
                        <p className="small  mb-0">Office of Management Information System</p>
                        <h5><span className="badge badge-info p-2 mt-2">Experience: 5 years</span></h5>
                    </div>
                </div>
                <div className="card-footer" style={{ display: 'flex', }}>
                    <div className="row align-items-center justify-content-between align-self-right ml-auto m-2">
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
