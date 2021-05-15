import React from 'react'
import PDSLearningAndDevelopment from './PDSLearningAndDevelopment'
import PDSOtherInformation from './PDSOtherInformation'
import PDSVolountaryWork from './PDSVolountaryWork'

export default function PDSUpdatePage3() {
    const [ component, setComponent ] = React.useState( <PDSVolountaryWork /> )

    function changeTab( tab: number ) {
        if ( tab == 1 ) {
            setComponent( <PDSVolountaryWork /> )
            return
        }
        if ( tab == 2 ) {
            setComponent( <PDSLearningAndDevelopment /> )
            return
        }
        setComponent( <PDSOtherInformation /> )
    }
    return (
        <div>
            <ul className="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <p onClick={() => changeTab( 1 )} className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fe fe-clipboard"></i>
                        <span>&nbsp;Voluntary Work or Involvement</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 2 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-book"></i>
                        <span>&nbsp;L&D</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 3 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-circle"></i>
                        <span>&nbsp;Others</span>
                    </p>
                </li>
            </ul>
            {component}
        </div>
    )
}
