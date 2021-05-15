import React from 'react'
import PDSID from './PDSID'
import PDSQuestions from './PDSQuestions'
import PDSReferences from './PDSReferences'

export default function PDSUpdatePage4() {
    const [ component, setComponent ] = React.useState( <PDSQuestions /> )

    function changeTab( tab: number ) {
        if ( tab == 1 ) {
            setComponent( <PDSQuestions /> )
            return
        }
        if ( tab == 2 ) {
            setComponent( <PDSReferences /> )
            return
        }
        setComponent( <PDSID /> )
    }

    return (
        <div>
            <ul className="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <p onClick={() => changeTab( 1 )} className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fe fe-code"></i>
                        <span>&nbsp;Questions</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 2 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-thumbs-up"></i>
                        <span>&nbsp;References</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 3 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-user-minus"></i>
                        <span>&nbsp;Identification</span>
                    </p>
                </li>
            </ul>
            {component}
        </div>
    )
}
