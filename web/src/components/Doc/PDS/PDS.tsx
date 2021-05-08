import React from 'react'
import PDSHeader from './Header/PDSHeader'
import './PDS.css'
import '../Doc.css'
import PersonalInformation from './PDSPage1/PersonalInformation'
import PDSPage2 from './PDSPage2/PDSPage2'
import PDSPage3 from './PDSPage3/PDSPage3'

export default function PDS() {
    
    return (
       <div>
            <div className="bg-white portrait-pds pds">
                <div className="PDSBorder">
                    <PDSHeader />
                    <PersonalInformation />
                </div>
            </div>
            <br />
            <PDSPage2 />
            <br />
            <PDSPage3 />
            
       </div>
    )
}
