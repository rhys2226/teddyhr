import React from 'react'
import { Alert } from '../../Alerts/Alert'

type Props = {
    data: Function
    makeStep: Function
}

export default function ApplicationStep2( props: Props ) {

    const [ alignment, setalignment ] = React.useState( '' )
    const [ educational_attainment, seteducational_attainment ] = React.useState( '' )
    const [ eligibilities, serteligibilities ] = React.useState( '' )
    const [ work_experience, setwork_experience ] = React.useState( '' )
    const [ degrees, setdegrees ] = React.useState( '' )
    const [ previous_employer, setprevious_employer ] = React.useState( '' )
    const [ previous_employer_contact_information, setprevious_employer_contact_information ] = React.useState( '' )

    return (
        <div>
            <h3>Professional Data</h3>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-8'>
                    <label>Alignment from Bachelors to  Post-graduate </label>
                    <select onChange={( e ) => setalignment( e.target.value )} className='form-control'>
                        <option>Vertical</option>
                        <option>Non-Vertical</option>
                    </select>
                </div>
                <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                    <label>Educational Attainments  (Separated with comma (,))</label>
                    <textarea id="educational_attainment" onChange={( e ) => seteducational_attainment( e.target.value )} className='form-control'></textarea>
                </div>
                <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                    <label>Eligibilities  (Separated with comma (,))</label>
                    <textarea id="eligibilities" onChange={( e ) => serteligibilities( e.target.value )} className='form-control'></textarea>
                </div>
                <div className='form-group mb-3 col-12 col-md-12 mt-2'>
                    <label>Degrees (Separated with comma (,))</label>
                    <textarea id="degrees" onChange={( e ) => setdegrees( e.target.value )} className='form-control' placeholder="Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology "></textarea>
                </div>
                <div className='form-group mb-3 col-12 mt-2'>
                    <label>Work Experiences</label>
                    <textarea id="work_experience" onChange={( e ) => setwork_experience( e.target.value )} className='form-control'></textarea>
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Previous Employer</label>
                    <input id="previous_employer" onChange={( e ) => setprevious_employer( e.target.value )} type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Employer's Contact Information</label>
                    <input id="previous_employer_contact_information" onChange={( e ) => setprevious_employer_contact_information( e.target.value )} type='text' className='form-control' />
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => props.makeStep( 1 )} className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                    <button onClick={() => {
                        $( 'input, textarea, select' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )
                        const data: any = {
                            alignment: alignment,
                            educational_attainment: educational_attainment,
                            eligibilities: eligibilities,
                            work_experience: work_experience,
                            degrees: degrees,
                            previous_employer: previous_employer,
                            previous_employer_contact_information: previous_employer_contact_information,
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
                        props.data( data )
                        props.makeStep( 3 )
                    }} className='btn btn-outline-success mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div>
    )
}
