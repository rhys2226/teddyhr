import React from 'react'

export default function Forms() {
    return (
        <div>
            <div className="modal fade modal-shortcut modal-slide" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="defaultModalLabel">Form Downloads</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body px-5">
                            <div className="row align-items-center">
                                <div className="col-6 text-center">
                                    <div className="squircle bg-success justify-content-center">
                                        <i className="fe fe-cpu fe-32 align-self-center text-white"></i>
                                    </div>
                                    <p>Personal Data Sheet</p>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="squircle bg-primary justify-content-center">
                                        <i className="fe fe-activity fe-32 align-self-center text-white"></i>
                                    </div>
                                    <p>Service Record</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-6 text-center">
                                    <div className="squircle bg-primary justify-content-center">
                                        <i className="fe fe-droplet fe-32 align-self-center text-white"></i>
                                    </div>
                                    <p>Office Performace Evaluation & Review</p>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="squircle bg-primary justify-content-center">
                                        <i className="fe fe-upload-cloud fe-32 align-self-center text-white"></i>
                                    </div>
                                    <p>Leave Card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
