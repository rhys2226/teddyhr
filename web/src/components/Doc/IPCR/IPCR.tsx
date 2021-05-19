import ICPRPage1 from "./ICPRPage1"
import ICPRPage2 from "./ICPRPage2"
import React from 'react'

export default function IpCR() {

    const [ ICPR, setICPR ] = React.useState( {} )

    return (

        <div>
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
