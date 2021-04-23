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
                                <div role="button" className="col-6 text-center">
                                    <div className="squircle bg-secondary justify-content-center">
                                        <i className="fe fe-clipboard fe-32 align-self-center text-secondary-lighter"></i>
                                    </div>
                                    <p>Personal Data Sheet</p>
                                </div>
                                <div role="button" className="col-6 text-center">
                                    <div className="squircle bg-info justify-content-center">
                                        <i className="fe fe-server fe-32 align-self-center text-info-lighter"></i>
                                    </div>
                                    <p>Service Record</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div role="button" className="col-6 text-center">
                                    <div className="squircle bg-danger justify-content-center">
                                        <i className="fe fe-heart fe-32 align-self-center text-danger-lighter"></i>
                                    </div>
                                    <p>Office Performace Evaluation & Review</p>
                                </div>
                                <div role="button" className="col-6 text-center">
                                    <div className="squircle bg-success justify-content-center">
                                        <i className="fe fe-corner-up-left fe-32 align-self-center text-success-lighter"></i>
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
