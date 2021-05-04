import React from 'react'
import PDSHeader from './Header/PDSHeader'
import './PDS.css'
import '../Doc.css'
import PersonalInformation from './PDSPage1/PersonalInformation'

export default function PDS() {
    
    return (
        <div className="bg-white portrait-pds pds">
            <div className="PDSBorder">
                <PDSHeader />
                <PersonalInformation />
            </div>
        </div>
    )
}
