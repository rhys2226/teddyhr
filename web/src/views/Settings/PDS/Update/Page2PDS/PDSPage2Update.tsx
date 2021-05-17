import React from 'react'
import PDSEligibility from './PDSEligibility'
import PDSWorkExperience from './PDSWorkExperience'

export default function PDSPage2Update() {
    const [ component, setComponent ] = React.useState( <PDSEligibility /> )

    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent( <PDSEligibility /> )
            return
        }
        setComponent( <PDSWorkExperience /> )
    }


    return (
        <div>
            <ul className="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <p onClick={() => changeTab( 1 )} className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fe fe-check-square"></i>
                        <span>&nbsp;Eligibility</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 2 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-coffee"></i>
                        <span>&nbsp;Work Experience</span>
                    </p>
                </li>
            </ul>
            {component}
        </div>
    )
}
