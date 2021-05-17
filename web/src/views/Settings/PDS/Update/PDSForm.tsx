import React from 'react'
import PDSUpdatePage1 from './Page1PDS/PDSUpdatePage1'
import PDSPage2Update from './Page2PDS/PDSPage2Update'
import PDSUpdatePage3 from './Page3PDS/PDSUpdatePage3'
import PDSUpdatePage4 from './Page4PDS/PDSUpdatePage4'

export default function PDSForm() {

    const [ component, setComponent ] = React.useState( <PDSUpdatePage1 /> )

    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent( <PDSUpdatePage1 /> )
            return
        }
        if ( tab === 2 ) {
            setComponent( <PDSPage2Update /> )
            return
        }
        if ( tab === 3 ) {
            setComponent( <PDSUpdatePage3 /> )
            return
        }
        setComponent( <PDSUpdatePage4 /> )
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
            <br />
            <br />
            {component}
        </div>
    )
}
