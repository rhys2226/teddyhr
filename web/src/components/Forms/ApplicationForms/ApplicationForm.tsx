import React from 'react';
import ApplicationStep1 from './ApplicationStep1';
import ApplicationStep2 from './ApplicationStep2';
import ApplicationStep3 from './ApplicationStep3';
import ApplicationStep4 from './ApplicationStep4';
import ApplicationStep5 from './ApplicationStep5';

export default function ApplicationForm() {
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
                                <i className="fe fe-circle bg-success-lighter circle fe-32 text-success-lighter "></i>
                            </div>
                            <div className="col-md-2 ml-3">
                                <i className="fe fe-activity fe-32 text-primary "></i>
                            </div>
                            <div className="col-md-2 ml-3">
                                <i className="fe fe-circle bg-secondary-lighter circle fe-32 text-secondary-lighter "></i>
                            </div>
                            <div className="col-md-2 ml-3">
                                <i className="fe fe-circle fe-32 bg-secondary-lighter circle text-secondary-lighter "></i>
                            </div>
                            <div className="col-md-2 ml-3">
                                <i className="fe fe-circle fe-32 bg-secondary-lighter circle text-secondary-lighter "></i>
                            </div>
                        </div>
                        <hr style={{ marginTop: '-20px' }} />
                        <br />
                        <div className='card-body'>
                            <ApplicationStep1 />
                            {/* <ApplicationStep2 /> */}
                            {/* <ApplicationStep3 /> */}
                            {/* <ApplicationStep4 /> */}
                            {/* <ApplicationStep5 /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
