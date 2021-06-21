import React from 'react'
import PrintComponents from 'react-print-components'
import { WorkExperiences } from '../PDS/PDSInterface'
import ServiceRecordSheet from './ServiceRecordSheet'

export default function PrinatableServiceRecord( props: {
    data: WorkExperiences[]
} ) {
    return (
        <div className="d-flex aic jcc " style={{ flexDirection: 'column' }}>
            <div>
                <PrintComponents
                    trigger={
                        <button className="btn btn-dark mb-3 mt-5">
                            <i className=" fe fe-printer"></i>
                            <span>&nbsp;Print Service Record</span>
                        </button>
                    }>
                    <ServiceRecordSheet data={props.data} />
                </PrintComponents>

                <ServiceRecordSheet data={props.data} />
            </div>
        </div>
    )
}
