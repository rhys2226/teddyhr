import React from 'react';
import ApplicationStep1 from './ApplicationStep1';
import ApplicationStep2 from './ApplicationStep2';
import ApplicationStep3 from './ApplicationStep3';
import ApplicationStep4 from './ApplicationStep4';
import ApplicationStep5 from './ApplicationStep5';
import { useHistory } from "react-router-dom";
import { Auth } from '../../../services/auth.service';
import { Alert } from '../../Alerts/Alert';
import axios from 'axios';

export default function ApplicationForm() {

    const history = useHistory()

    const [ stepper, setStep ] = React.useState( 1 )

    let personalDataForm: any
    let professionalDataForm: any
    let attachmentForm: any
    let credentialsForm: any
    let avatarForm: any


    const [ form, setForm ] = React.useState(
        <ApplicationStep1
            step1={( personalData: JSON ) => {
                personalDataForm = personalData
            }}
            makeStep={( step: number ) => {
                changeStep( step )
            }}
        />
    )

    async function changeStep( step: number ) {
        setStep( step )
        if ( step === 1 ) {
            setForm(
                <ApplicationStep1
                    step1={( personalData: JSON ) => {
                        personalDataForm = personalData
                    }}
                    makeStep={( step: number ) => {
                        changeStep( step )
                    }}
                />
            )
        }
        if ( step === 2 ) {
            setForm(
                <ApplicationStep2
                    step2={( professionalData: JSON ) => {
                        professionalDataForm = professionalData
                    }}
                    makeStep={( step: number ) => {
                        changeStep( step )
                    }}
                />
            )
        }
        if ( step === 3 ) {
            setForm(
                <ApplicationStep3
                    step3={( attachments: any ) => {
                        attachmentForm = attachments
                    }}
                    makeStep={( step: number ) => {
                        changeStep( step )
                    }}
                />
            )
        }
        if ( step === 4 ) {
            setForm(
                <ApplicationStep4
                    step4={( credentials: JSON ) => {
                        credentialsForm = credentials
                    }}
                    makeStep={( step: number ) => {
                        changeStep( step )
                    }}
                />
            )
        }
        if ( step === 5 ) {
            setForm(
                <ApplicationStep5
                    step5={( avatar: any ) => {
                        avatarForm = avatar
                    }}
                    makeStep={( step: number ) => {
                        changeStep( step )
                    }}
                    data={
                        Object.assign(
                            personalDataForm,
                            professionalDataForm,
                        )
                    }
                    SubmitForm={async () => {
                        const data: any = Object.assign(
                            personalDataForm,
                            professionalDataForm,
                            credentialsForm,
                            avatarForm,
                            {
                                Type: 'Applicant',
                                Position: 'Developer',
                                Attachments: attachmentForm
                            }
                        )
                        const formData = new FormData()
                        for ( let key in data ) {
                            if ( key !== 'Attachments' ) {
                                formData.append( key, data[ key ] )
                            }
                        }
                        let i = 0;
                        for ( let index of data[ 'Attachments' ] ) {
                            formData.append( `Attachments${ i }`, index )
                            i += 1
                        }
                        axios.post( 'auth/register', formData, { headers: { "Content-Type": "multipart/form-data" } } )
                            .then( ( auth: any ) => {
                                Alert( 'Applied Successfully', auth.message, 'success' )
                            } )
                            .catch( () => {
                                Alert( 'Error!', 'Something went wrong', 'error' )

                            } )
                    }}
                />
            )
        }
    }


    return (
        <div className='container-fluid application-form'>
            <div className='row align-items-center h-100'>
                <div className='col-lg-12'>
                    <div className='card my-12'>
                        <div className='card-header'>
                            <strong>Application Form</strong>
                        </div>
                        <br />
                        <div className="row  text-center ml-5">
                            <div className="col-md-2 ml-3">
                                <i className={`${ stepper === 1 ? ' fe-edit-3 text-primary' : 'fe-circle bg-secondary-lighter circle text-secondary-lighter' } fe-32 fe `} ></i>
                            </div>
                            <div className="col-md-2 ml-3">
                                <i className={`${ stepper === 2 ? ' fe-edit-3  text-primary' : 'fe-circle bg-secondary-lighter circle text-secondary-lighter' } fe-32 fe `}></i>
                            </div>
                            <div className="col-md-2 ml-3">
                                <i className={`${ stepper === 3 ? ' fe-edit-3  text-primary' : 'fe-circle bg-secondary-lighter circle text-secondary-lighter' } fe-32 fe `}></i>
                            </div>
                            <div className="col-md-2 ml-3">
                                <i className={`${ stepper === 4 ? ' fe-edit-3  text-primary' : 'fe-circle bg-secondary-lighter circle text-secondary-lighter' } fe-32 fe `}></i>
                            </div>
                            <div className="col-md-2 ml-3">
                                <i className={`${ stepper === 5 ? ' fe-edit-3  text-primary' : 'fe-circle bg-secondary-lighter circle text-secondary-lighter' } fe-32 fe `}></i>
                            </div>
                        </div>
                        <hr style={{ marginTop: '-20px' }} />
                        <br />
                        <div className='card-body'>
                            {form}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
