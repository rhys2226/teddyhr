import ICPRPage1 from "./ICPRPage1"
import ICPRPage2 from "./ICPRPage2"
import React from 'react'

export default function IpCR() {

    const [ ICPR, setICPR ] = React.useState( {} )

    return (

        <div className="d-flex aic jcc" style={{ flexDirection: 'column' }}>
            <button className="btn btn-primary mb-3">
                <i className=" fe fe-download"></i>
                <span>&nbsp;Download IPCR</span>
            </button>

            <ICPRPage1
                data={( data: JSON ) => {
                    console.log( data )
                }}
            />

            <br />

            <ICPRPage2
                data={( data: JSON ) => {
                    console.log( data )
                }}
            />
        </div>
    )
}
