import React from 'react'
import PDSHeader from './Header/PDSHeader'
import './PDS.css'
import '../Doc.css'
import PersonalInformation from './PDSPage1/PersonalInformation'
import PDSPage2 from './PDSPage2/PDSPage2'
import PDSPage3 from './PDSPage3/PDSPage3'
import PDSPage4 from './PDSPage4/PDSPage4'

export default function PDS() {

    return (
        <div>
            <button className="btn btn-primary mb-3">
                <i className=" fe fe-download"></i>
                <span>&nbsp;Download Sheet</span>
            </button>
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
            <br />
            <PDSPage4 />

        </div>
    )
}
