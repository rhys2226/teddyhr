import React from 'react'
import PrintComponents from 'react-print-components'
import AppforLeavePrint from './AppforLeavePrint'

export default function ApplicationForLeaveSheet( props: any ) {
    return (
        <div>

            <PrintComponents
                trigger={
                    <button className="btn btn-dark mb-3 mt-5">
                        <i className=" fe fe-printer"></i>
                        <span>&nbsp;Print Leave Application</span>
                    </button>
                }>
                <AppforLeavePrint leaves={props.leaves} data={props.data} />
            </PrintComponents>
            <div className="card shadow col-md-12 row m-0" >
                <div className="card-body col-md-12 row m-0 p-5">
                    <AppforLeavePrint leaves={props.leaves} data={props.data} />
                </div>
            </div>
        </div>
    )
}
