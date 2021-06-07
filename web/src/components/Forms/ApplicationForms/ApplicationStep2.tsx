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
                    <select id="alignment" className='form-control'>
                        <option></option>
                        <option>Vertical</option>
                        <option>Non-Vertical</option>
                    </select>
                </div>
                <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                    <label>Educational Attainments  (Separated with comma (,))</label>
                    <textarea id="educational_attainment" className='form-control'></textarea>
                </div>
                <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                    <label>Eligibilities  (Separated with comma (,))</label>
                    <textarea id="eligibilities" className='form-control'></textarea>
                </div>
                <div className='form-group mb-3 col-12 col-md-12 mt-2'>
                    <label>Degrees (Separated with comma (,))</label>
                    <textarea id="degrees" className='form-control' placeholder="Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology "></textarea>
                </div>
                <div className='form-group mb-3 col-12 mt-2'>
                    <label>Work Experiences</label>
                    <textarea id="work_experience" className='form-control'></textarea>
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Previous Employer</label>
                    <input id="previous_employer" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Employer's Contact Information</label>
                    <input id="previous_employer_contact_information" type='text' className='form-control' />
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => props.makeStep( 1 )} className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                    <button onClick={() => {
                        $( 'input, textarea, select' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )
                        const data: any = {
                            alignment: $( '#alignment' ).val(),
                            educational_attainment: $( '#educational_attainment' ).val(),
                            eligibilities: $( '#eligibilities' ).val(),
                            work_experience: $( '#work_experience' ).val(),
                            degrees: $( '#degrees' ).val(),
                            previous_employer: $( '#previous_employer' ).val(),
                            previous_employer_contact_information: $( '#previous_employer_contact_information' ).val(),
                        }
                        for ( let key in data ) {
                            if ( key != 'alignment' ) {
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
                    }} className='btn btn-outline-success mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div>
    )
}
