import React from 'react'
import PDSEducBG from './PDSEducBG'
import PDSFamilyBG from './PDSFamilyBG'
import PDSPersonalBg from './PDSPersonalBg'

export default function PDSUpdatePage1( props: any ) {

    const [ component, setComponent ] = React.useState( <PDSPersonalBg /> )

    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent( <PDSPersonalBg /> )
            return
        }
        if ( tab === 2 ) {
            setComponent( <PDSFamilyBG /> )
            return
        }
        setComponent( <PDSEducBG /> )
    }

    return (
        <div>
            <ul className="nav nav-pills  mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <p onClick={() => changeTab( 1 )} className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fe fe-user"></i>
                        <span>&nbsp;Personal Background</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 2 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-users"></i>
                        <span>&nbsp;Family Background</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 3 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-edit-2"></i>
                        <span>&nbsp;Educational Background</span>
                    </p>
                </li>
            </ul>
            {component}
        </div>
    )
}
