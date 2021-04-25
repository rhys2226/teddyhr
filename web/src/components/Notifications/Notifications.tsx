import React from 'react'

export default function Notifications() {
    return (
        <div className="modal fade modal-notif modal-slide" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="defaultModalLabel">Notifications</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="list-group list-group-flush my-n3">
                            <div className="list-group-item bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <span className="fe fe-box fe-24"></span>
                                    </div>
                                    <div className="col">
                                        <small><strong>Schedule Tomorrow</strong></small>
                                        <div className="my-0 text-muted small">Tomorrow will be you seminar</div>
                                        <small className="badge badge-pill bg-info-lighter text-info">1m ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group list-group-flush my-n3">
                            <div className="list-group-item bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <span className="fe fe-box fe-24"></span>
                                    </div>
                                    <div className="col">
                                        <small><strong>Jo-i Bayoneta</strong></small>
                                        <div className="my-0 text-muted small">Once to apply as developer</div>
                                        <small className="badge badge-pill bg-info-lighter text-info">1m ago</small>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <span className="fe fe-box fe-24"></span>
                                    </div>
                                    <div className="col">
                                        <small><strong>Ryan Agsaluna</strong></small>
                                        <div className="my-0 text-muted small">June Employee of the month</div>
                                        <small className="badge badge-pill bg-info-lighter text-info">1m ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger btn-block" data-dismiss="modal">Clear All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
