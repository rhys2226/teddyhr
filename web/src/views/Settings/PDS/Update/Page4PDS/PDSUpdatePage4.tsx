import React from 'react'
import PDSID from './PDSID'
import PDSQuestions from './PDSQuestions'
import PDSReferences from './PDSReferences'
import * as interfaces from '../../../../../components/Doc/PDS/PDSInterface'
import { Auth } from '../../../../../services/auth.service'

export default function PDSUpdatePage4() {

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
                    <PDSQuestions
                        ThirdDegree={data.third_degree}
                        ForuthDegree={data.foruth_degree}
                        FoundGuility={data.found_guility}
                        CriminallyCharged={data.criminally_charged}
                        BeenConvicted={data.been_convicted}
                        Seperated={data.seperated}
                        Candidate={data.candidate}
                        Resigned={data.resigned}
                        Immigrant={data.immigrant}
                        Indigenous={data.indigenous}
                        Disability={data.disability}
                    />
                )
            } )
    }


    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent( <PDSQuestions
                ThirdDegree={data.third_degree}
                ForuthDegree={data.foruth_degree}
                FoundGuility={data.found_guility}
                CriminallyCharged={data.criminally_charged}
                BeenConvicted={data.been_convicted}
                Seperated={data.seperated}
                Candidate={data.candidate}
                Resigned={data.resigned}
                Immigrant={data.immigrant}
                Indigenous={data.indigenous}
                Disability={data.disability}
            /> )
            return
        }
        if ( tab === 2 ) {
            setComponent( <PDSReferences References={data.references} /> )
            return
        }
        setComponent( <PDSID Idenification={data.identification} /> )
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
