import React from 'react'
import { useHistory } from "react-router-dom";

export default function Eligibilities() {
    const history = useHistory()

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow">
                <div className="card-body my-n3">
                    <div className="row align-items-center">
                        <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-check-square fe-24 text-warning"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="h5 mt-4 mb-1">Eligibilities</h3>
                            </a>
                            <ul>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a role="button" onClick={() => {
                        history.push( '/home/settings/profile' )

                    }} className="d-flex justify-content-between text-muted"><span>Account Settings</span><i className="fe fe-chevron-right"></i></a>
                </div>
            </div>
        </div>
    )
}
