import React from 'react'
import PDSEligibility from './PDSEligibility'
import PDSWorkExperience from './PDSWorkExperience'
import * as interfaces from '../../../../../components/Doc/PDS/PDSInterface'
import { Auth } from '../../../../../services/auth.service'

export default function PDSPage2Update() {

    const [ data, setData ]: any = React.useState<interfaces.PDS>()
    const userData: any = localStorage.getItem( 'user' )
    React.useEffect( () => {
        getPDS()
    }, [] )

    function getPDS() {
        const api = new Auth( 'pds' )
        api.fetchOne( JSON.parse( userData ).id )
            .then( ( data: any ) => {
                setData( data )
                setComponent(
                    <PDSEligibility
                        Eligibilities={data.eligiblities}
                    />
                )
            } )
    }


    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent(
                <PDSEligibility
                    Eligibilities={data.eligiblities}
                />
            )
            return
        }
        setComponent(
            <PDSWorkExperience
                WorkExperiences={data.work_experiences}
            />
        )
    }

    const [ component, setComponent ]: any = React.useState(
        <div className="spinner-border mr-3" role="status">
            <span className="sr-only">Loading...</span>
        </div> )

    return (
        <div>
            <ul className="nav nav-pills  mb-3" id="pills-tab" role="tablist">
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
