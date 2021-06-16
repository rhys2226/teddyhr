import React from 'react'
import PDSLearningAndDevelopment from './PDSLearningAndDevelopment'
import PDSOtherInformation from './PDSOtherInformation'
import PDSVolountaryWork from './PDSVolountaryWork'
import * as interfaces from '../../../../../components/Doc/PDS/PDSInterface'
import { Auth } from '../../../../../services/auth.service'

export default function PDSUpdatePage3() {

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
                    <PDSVolountaryWork
                        VolunteerInvolvements={data.volountary_involvements}
                    />
                )
            } )
    }


    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent( <PDSVolountaryWork VolunteerInvolvements={data.volountary_involvements} /> )
            return
        }
        if ( tab === 2 ) {
            setComponent( <PDSLearningAndDevelopment LearningAndDevelopments={data.learning_and_development} /> )
            return
        }
        setComponent( <PDSOtherInformation Others={data.others} /> )
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
