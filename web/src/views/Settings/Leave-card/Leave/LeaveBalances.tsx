import React from 'react'
import { LeaveTypes } from './LeaveTypes'

export default function LeaveBalances() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <h2 className="h3 page-title">Accumulated Leave Balances</h2>
                <h6 className="h5 mb-4 page-title text-muted d-flex">Next Credit: &nbsp;
                 <span className="text-info">
                        <i className="fe fe-calendar"></i> &nbsp; July 21, 2021
                 </span>
                </h6>
                <div className="card card-body ">
                    <div className="row pt-5">
                        {
                            LeaveTypes.map( ( leave, index ) => (
                                <p className="col-md-6 text-center" key={index}>{leave} <span><h1 className="text-success mb-5">0</h1></span></p>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
