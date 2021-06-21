import React from 'react'
import { Alert } from '../../Alerts/Alert'

type Props = {
    step2: Function
    makeStep: Function
}

export default function ApplicationStep2( props: Props ) {


    return (
        <div>
            <h3>Professional Data</h3>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-8'>
                    <label>Alignment from Bachelors to  Post-graduate </label>
                    <select id="Alignment" className='form-control'>
                        <option></option>
                        <option>Vertical</option>
                        <option>Non-Vertical</option>
                    </select>
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                    <label>Educational Attainments</label>
                    <h6 className="text-info mt-2 small">Separated with comma/s (,)</h6>
                    <textarea id="EducationalAttainments" className='form-control'></textarea>
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                    <label>Eligibilities</label>
                    <h6 className="text-info mt-2 small">Separated with comma/s (,)</h6>
                    <textarea id="Eligibilities" className='form-control'></textarea>
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-12 mt-2'>
                    <label>Degrees</label>
                    <h6 className="text-info mt-2 small">Separated with comma/s (,)</h6>
                    <textarea id="Degrees" className='form-control' ></textarea>
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 mt-2'>
                    <label>Work Experiences</label>
                    <h6 className="text-info mt-2 small">Separated with comma/s (,)</h6>
                    <textarea id="WorkExperience" className='form-control'></textarea>
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Previous Employer</label>
                    <input id="PreviousEmployer" type='text' className='form-control' />
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Employer's Contact Information</label>
                    <input id="EmployersContactInformation" type='text' className='form-control' />
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => props.makeStep( 1 )} className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                    <button onClick={() => {
                        $( 'input, textarea, select' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )
                        const data: any = {
                            Alignment: $( '#Alignment' ).val(),
                            EducationalAttainments: $( '#EducationalAttainments' ).val(),
                            Eligibilities: $( '#Eligibilities' ).val(),
                            WorkExperience: $( '#WorkExperience' ).val(),
                            Degrees: $( '#Degrees' ).val(),
                            PreviousEmployer: $( '#PreviousEmployer' ).val(),
                            EmployersContactInformation: $( '#EmployersContactInformation' ).val(),
                        }
                        for ( let key in data ) {
                            if ( key != 'Alignment' ) {
                                if ( data[ key ] == "" ) {
                                    $( `#${ key }` ).addClass( 'is-invalid' )
                                    Alert( 'Check Again', 'One or more fields should not be empty', 'error' )
                                    return
                                }
                                else {
                                    $( `#${ key }` ).addClass( 'is-valid' )
                                }
                            }
                        }
                        props.makeStep( 3 )
                        props.step2( data )
                    }} className='btn btn-dark mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div>
    )
}
