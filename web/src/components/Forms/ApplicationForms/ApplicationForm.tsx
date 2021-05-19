import React from 'react';
import ApplicationStep1 from './ApplicationStep1';
import ApplicationStep2 from './ApplicationStep2';
import ApplicationStep3 from './ApplicationStep3';
import ApplicationStep4 from './ApplicationStep4';
import ApplicationStep5 from './ApplicationStep5';

export default function ApplicationForm() {

    const [ stepper, setStep ] = React.useState( 1 )
    const [ form, setForm ] = React.useState(
        <ApplicationStep1
            makeStep={( step: any ) => {
                changeStep( step )
            }}
        />
    )

    async function changeStep( step: number ) {
        setStep( step )
        if ( step === 1 ) {
            setForm(
                <ApplicationStep1 makeStep={( step: any ) => {
                    changeStep( step )
                }} />
            )
        }
        if ( step === 2 ) {
            setForm(
                <ApplicationStep2 makeStep={( step: any ) => {
                    changeStep( step )
                }} />
            )
        }
        if ( step === 3 ) {
            setForm(
                <ApplicationStep3 makeStep={( step: any ) => {
                    changeStep( step )
                }} />
            )
        }
        if ( step === 4 ) {
            setForm(
                <ApplicationStep4 makeStep={( step: any ) => {
                    changeStep( step )
                }} />
            )
        }
        if ( step === 5 ) {
            setForm(
                <ApplicationStep5 makeStep={( step: any ) => {
                    changeStep( step )
                }} />
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
