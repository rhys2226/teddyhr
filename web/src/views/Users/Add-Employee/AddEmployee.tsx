import { useState } from 'react';
import axios from 'axios';
import * as base from '.././../../constants/base'
import { Alert } from '../../../components/Alerts/Alert';

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
    const [ position, setposition ] = useState( '' )


    async function submitEmployee() {
        if ( pasword !== confirmpassword ) {
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
            position: position,
            isEmployee: true,
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
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="card-deck">
                    <div className="card shadow mb-4">
                        <div className="card-header p-3">
                            <h2 className="card-title mt-2">Employee Form</h2>
                        </div>
                        <div className="card-body">
                            <form className="row">
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


                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>First Name</label>
                                    <input onChange={( e ) => setfirst_name( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Last Name</label>
                                    <input onChange={( e ) => setlast_name( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Middle Name</label>
                                    <input onChange={( e ) => setmiddle_name( e.target.value )} type='text' className='form-control' />
                                </div>


                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Phone</label>
                                    <input onChange={( e ) => setphone( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Email</label>
                                    <input onChange={( e ) => setemail( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Position/Title</label>
                                    <input onChange={( e ) => setposition( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Alignment </label>
                                    <select onChange={( e ) => setalignment( e.target.value )} className='form-control'>
                                        <option selected disabled>Choose..</option>
                                        <option>Vertical</option>
                                        <option>Non-Vertical</option>
                                    </select>
                                </div>

                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Previous Employer</label>
                                    <input onChange={( e ) => setprevious_employer( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Prev Employer's Contact Information</label>
                                    <input onChange={( e ) => setprevious_employer_contact( e.target.value )} type='text' className='form-control' />
                                </div>

                                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                                    <button onClick={( e ) => { e.preventDefault(); submitEmployee() }} className='btn btn-outline-primary mx-2 px-md-5'>Submit Employee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
