import React from 'react'
import PDSHeader from './Header/PDSHeader'
import './PDS.css'
import '../Doc.css'
import PersonalInformation from './PDSPage1/PersonalInformation'
import PDSPage2 from './PDSPage2/PDSPage2'
import PDSPage3 from './PDSPage3/PDSPage3'
import PDSPage4 from './PDSPage4/PDSPage4'

export default function PDS() {
    const [ component, setComponent ] = React.useState( Page1() )

    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent( Page1() )
            return
        }
        if ( tab === 2 ) {
            setComponent( <PDSPage2 /> )
            return
        }
        if ( tab === 3 ) {
            setComponent( <PDSPage3 /> )
            return
        }
        setComponent( <PDSPage4 /> )
    }

    function Page1() {
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
            </div>
        )
    }


    return (
        <div>
            <ul className="nav nav-pills" id="pills-tab2" role="tablist">
                <li className="nav-item">
                    <p onClick={() => changeTab( 1 )} className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fe fe-folder"></i>
                        <span>&nbsp;C1</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 2 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-folder"></i>
                        <span>&nbsp;C2</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 3 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-folder"></i>
                        <span>&nbsp;C3</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 4 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-folder"></i>
                        <span>&nbsp;C4</span>
                    </p>
                </li>
            </ul>
            {component}
        </div>
    )
}
