import PDSHeader from './Header/PDSHeader'
import './PDS.css'
import '../Doc.css'
import PersonalInformation from './PDSPage1/PersonalInformation'
import PDSPage2 from './PDSPage2/PDSPage2'
import PDSPage3 from './PDSPage3/PDSPage3'
import PDSPage4 from './PDSPage4/PDSPage4'
import React, { useRef } from 'react';
import PrintComponents from 'react-print-components'
import { Auth } from '../../../services/auth.service'
import * as interfaces from './PDSInterface'
import {
    useParams
} from "react-router-dom";
import { noData } from '../../Alerts/Alert'

export default function PDS() {

    const [ data, setData ]: any = React.useState<interfaces.PDS>()
    let { id }: any = useParams();

    React.useEffect( () => {
        getPDS()
    }, [] )

    function getPDS() {
        const api = new Auth( 'pds' )
        api.fetchOne( id )
            .then( ( data ) => {
                noData()
                setData( data )
                setComponent(
                    <div className="bg-white portrait-pds pds">
                        <div className="PDSBorder" style={{ marginTop: '-25px' }}>
                            <PDSHeader />
                            <PersonalInformation
                                User={data.user}
                                PesonsalInformation={data.personal_information}
                                Resedential={data.residential_address}
                                Permanent={data.permanent_address}
                                FamilyBackground={data.family_background}
                                Children={data.children}
                                Elementary={data.elementary}
                                Secondary={data.secondary}
                                College={data.college}
                                Vocational={data.vocational}
                                GraduateStudies={data.graduate_studies}
                            />
                        </div>
                    </div>
                )
            } )
    }


    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent(
                <div className="bg-white portrait-pds pds">
                    <div className="PDSBorder" style={{ marginTop: '-25px' }}>
                        <PDSHeader />
                        <PersonalInformation
                            User={data.user}
                            PesonsalInformation={data.personal_information}
                            Resedential={data.residential_address}
                            Permanent={data.permanent_address}
                            FamilyBackground={data.family_background}
                            Children={data.children}
                            Elementary={data.elementary}
                            Secondary={data.secondary}
                            College={data.college}
                            Vocational={data.vocational}
                            GraduateStudies={data.graduate_studies}
                        />
                    </div>
                </div> )
            return
        }
        if ( tab === 2 ) {
            setComponent(
                <PDSPage2
                    Eligibilities={data.eligiblities}
                    WorkExperiences={data.work_experiences}
                />
            )
            return
        }
        if ( tab === 3 ) {
            setComponent(
                <PDSPage3
                    VolunteerInvolvements={data.volountary_involvements}
                    LearningAndDevelopments={data.learning_and_development}
                    Others={data.others}
                />
            )
            return
        }
        setComponent(
            <PDSPage4
                References={data.references}
                Idenification={data.identification}

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
    }


    const [ component, setComponent ]: any = React.useState(
        <div className="spinner-border mr-3" role="status">
            <span className="sr-only">Loading...</span>
        </div> )


    function ToBePrinted( props: any ) {
        return (
            <div className="d-flex aic jcc" style={{ flexDirection: 'column' }}>
                {component}
            </div >
        )
    }

    return (
        <div>
            <ul className="nav nav-pills d-flex aic jcc" id="pills-tab2" role="tablist">
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
            <PrintComponents
                trigger={
                    <button className="btn btn-dark mb-3 mt-5">
                        <i className=" fe fe-printer"></i>
                        <span>&nbsp;Print Personal Data Sheet</span>
                    </button>
                }>
                <ToBePrinted />
            </PrintComponents>
            <ToBePrinted />
        </div>
    )
}
