
import React from 'react'
import ICPRTable from "./ICPRTable"

export default function IpCR() {

    const [ ICPR, setICPR ] = React.useState( {} )

    return (

        <div >

            <ICPRTable />

        </div>
    )
}
