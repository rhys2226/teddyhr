import { useState } from 'react';
import axios from 'axios';
import * as base from '.././../../constants/base'
import { Alert, Fire } from '../../../components/Alerts/Alert';

export default function AddEmployee() {

    const [ disabled, setdisabled ] = useState( false )

    const [ username, setusername ] = useState( '' )
    const [ pasword, setpasword ] = useState( '' )
    const [ confirmpassword, setconfirmpassword ] = useState( '' )
    const [ first_name, setfirst_name ] = useState( '' )
    const [ last_name, setlast_name ] = useState( '' )
    const [ middle_name, setmiddle_name ] = useState( '' )
    const [ phone, setphone ] = useState( '' )
    const [ alignment, setalignment ] = useState( '' )
    const [ educational_attainments, seteducational_attainments ]: any = useState( [] )
    const [ eligibilities, seteligibilities ]: any = useState( [] )
    const [ degrees, setdegrees ] = useState( '' )
    const [ work_experience, setwork_experience ] = useState( '' )
    const [ previous_employer, setprevious_employer ] = useState( '' )
    const [ previous_employer_contact, setprevious_employer_contact ] = useState( '' )
    const [ email, setemail ] = useState( '' )


    async function submitEmployee() {
        if ( pasword != confirmpassword ) {
            Alert( 'Error', `Passwords doesn't match`, 'error' )
            return
        }
        setdisabled( true )
        const data = {
            username: username,
            password: pasword,
            first_name: first_name,
            last_name: last_name,
            middle_name: middle_name,
            phone: phone,
            alignment: alignment,
            educational_attainments: JSON.stringify( educational_attainments ),
            eligibilities: JSON.stringify( eligibilities ),
            degrees: degrees,
            work_experience: work_experience,
            previous_employer: previous_employer,
            previous_employer_contact: previous_employer_contact,
            email: email,
        }
        const url = `${ base.api }auth/register`
        await axios.post( url, data )
            .then( function ( response ) {
                Alert( 'Success', 'Employee Created Successfully', 'success' )
            } ).catch( () => [
                Alert( 'Error', 'Username is already taken', 'error' )
            ] )
        setdisabled( false )
    }

    function getSelectMultipleValues( e: any ) {
        var options = e.target.options;
        var value = [];
        for ( var i = 0, l = options.length; i < l; i++ ) {
            if ( options[ i ].selected ) {
                value.push( options[ i ].value );
            }
        }
        return value
    }


    return (
        <div className="card-deck">
            <div className="card shadow mb-4">
                <div className="card-header">
                    <strong className="card-title">Employee form</strong>
                </div>
                <div className="card-body">
                    <form className="row">
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>First Name</label>
                            <input onChange={( e ) => setfirst_name( e.target.value )} type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Last Name</label>
                            <input onChange={( e ) => setlast_name( e.target.value )} type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Middle Name</label>
                            <input onChange={( e ) => setmiddle_name( e.target.value )} type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Phone</label>
                            <input onChange={( e ) => setphone( e.target.value )} type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Email</label>
                            <input onChange={( e ) => setemail( e.target.value )} type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Alignment </label>
                            <select onChange={( e ) => setalignment( e.target.value )} className='form-control'>
                                <option>Vertical</option>
                                <option>Non-Vertical</option>
                            </select>
                        </div>
                        <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                            <label>Educational Attainments</label>
                            <select onChange={( e ) => { seteducational_attainments( getSelectMultipleValues( e ) ) }} multiple className='form-control'>
                                <option>Phd</option>
                                <option>Masters</option>
                                <option>Bachelor</option>
                                <option>Vocational</option>
                                <option>Secondary</option>
                                <option>Primary</option>
                            </select>
                        </div>
                        <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                            <label>Eligibilities</label>
                            <select onChange={( e ) => { seteligibilities( getSelectMultipleValues( e ) ) }} multiple className='form-control'>
                                <option>Civil Service</option>
                                <option>PRC</option>
                            </select>
                        </div>
                        <div className='form-group mb-3 col-12 col-md-12 mt-2'>
                            <label>Degrees (Separated with comma (,))</label>
                            <textarea onChange={( e ) => setdegrees( e.target.value )} className='form-control' placeholder="Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology "></textarea>
                        </div>
                        <div className='form-group mb-3 col-12 mt-2'>
                            <label>Work Experiences</label>
                            <textarea onChange={( e ) => setwork_experience( e.target.value )} className='form-control'></textarea>
                        </div>
                        <div className='form-group mb-3 col-12 col-md-6'>
                            <label>Previous Employer</label>
                            <input onChange={( e ) => setprevious_employer( e.target.value )} type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-6'>
                            <label>Employer's Contact Information</label>
                            <input onChange={( e ) => setprevious_employer_contact( e.target.value )} type='text' className='form-control' />
                        </div>
                        <div className='card mb-3 col-12 col-md-12'>
                            <div className='card-body'>
                                <form action='/file-upload' className='dropzone bg-light rounded-lg' id='tinydash-dropzone'>
                                    <div className='dz-message needsclick'>
                                        <div className='circle circle-lg bg-primary'>
                                            <i className='fe fe-upload fe-24 text-white'></i>
                                        </div>
                                        <h5 className='text-muted mt-4'>Attach All Supporting Documents here. (Don't include Personal Data Sheet, Service Records, Office Performance and Performance Review, Leave Card)</h5>
                                    </div>
                                </form>
                                <div className='dropzone-previews mt-3' id='file-previews'></div>
                                <div className='d-none' id='uploadPreviewTemplate'>
                                    <div className='p-2'>
                                        <div className='row align-items-center'>
                                            <div className='col-auto'>
                                                <img data-dz-thumbnail src='#' className='avatar-sm rounded bg-light' alt='' />
                                            </div>
                                            <div className='col pl-0'>
                                                <a
                                                    href='javascript:void(0);'
                                                    className='text-muted font-weight-bold'
                                                    data-dz-name></a>
                                                <p className='mb-0' data-dz-size></p>
                                            </div>
                                            <div className='col-auto'>
                                                <a href='' className='btn btn-link btn-lg text-muted' data-dz-remove>
                                                    <i className='dripicons-cross'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <div className='form-group mb-3 col-12 col-md-4'>
                                <label>Username</label>
                                <input onChange={( e ) => setusername( e.target.value )} type='text' className='form-control' />
                            </div>
                            <div className='form-group mb-3 col-12 col-md-4'>
                                <label>Password</label>
                                <input onChange={( e ) => setpasword( e.target.value )} type='text' className='form-control' />
                            </div>
                            <div className='form-group mb-3 col-12 col-md-4'>
                                <label>Confirm Password</label>
                                <input onChange={( e ) => setconfirmpassword( e.target.value )} type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                            <button onClick={( e ) => { e.preventDefault(); submitEmployee() }} className='btn btn-outline-primary mx-2 px-md-5'>Submit Employee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
