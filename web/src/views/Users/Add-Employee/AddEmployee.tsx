import { useState } from 'react';
import axios from 'axios';
import * as base from '.././../../constants/base'
import { Alert } from '../../../components/Alerts/Alert';
import { auth, collection } from '../../../Firebase/firebase';

export default function AddEmployee() {

    const [ disabled, setdisabled ] = useState( false )

    const [ pasword, setpasword ] = useState( '' )
    const [ confirmpassword, setconfirmpassword ] = useState( '' )
    const [ first_name, setfirst_name ] = useState( '' )
    const [ last_name, setlast_name ] = useState( '' )
    const [ middle_name, setmiddle_name ] = useState( '' )
    const [ phone, setphone ] = useState( '' )
    const [ email, setemail ] = useState( '' )
    const [ position, setposition ] = useState( '' )
    const [ alignment, setalignment ] = useState( '' )
    const [ previous_employer, setprevious_employer ] = useState( '' )
    const [ previous_employer_contact, setprevious_employer_contact ] = useState( '' )


    async function submitEmployee() {
        if ( pasword !== confirmpassword ) {
            Alert( 'Error', `Passwords doesn't match`, 'error' )
            return
        }
        setdisabled( true )
        const data: any = {
            email: email,
            password: pasword,
            first_name: first_name,
            last_name: last_name,
            middle_name: middle_name,
            phone: phone,
            alignment: alignment,
            previous_employer: previous_employer,
            previous_employer_contact: previous_employer_contact,
            position: position,
        }
        $( 'input' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )

        for ( let key in data ) {
            if ( data[ key ] === "" ) {
                if ( key !== 'alignment' ) {
                    $( `#${ key }` ).addClass( 'is-invalid' )
                    Alert( 'Check Again', 'One or more fields should not be empty ' + key, 'error' )
                    setdisabled( false )
                    break;
                }
            }
        }
        auth().createUserWithEmailAndPassword( email, pasword ).
            then( () => {
                collection( 'employees' ).add( data ).then( () => {
                    Alert( 'Registration Successfull', 'Employee has been added', 'success' )
                    setdisabled( false )
                    for ( let key in data ) {
                        $( `#${ key }` ).val( '' )
                        $( `#${ key }` ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )

                    }
                } ).catch( ( error ) => { Alert( 'There was an error', 'Something went wrong. Try Again', 'error' ) } )
            } )
            .catch( ( error ) => {
                for ( let key in error ) {
                    if ( key == 'code' || key == 'message' )
                        Alert( 'Registration Failed', error[ key ], 'error' )
                }
                setdisabled( false )
            } )
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
                                    <label>Email</label>
                                    <input id="email" onChange={( e ) => setemail( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Password</label>
                                    <input id="password" onChange={( e ) => setpasword( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Confirm Password</label>
                                    <input id="confirmpassword" onChange={( e ) => setconfirmpassword( e.target.value )} type='text' className='form-control' />
                                </div>


                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>First Name</label>
                                    <input id="confirmpassword" onChange={( e ) => setfirst_name( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Last Name</label>
                                    <input id="last_name" onChange={( e ) => setlast_name( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Middle Name</label>
                                    <input id="middle_name" onChange={( e ) => setmiddle_name( e.target.value )} type='text' className='form-control' />
                                </div>


                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Phone</label>
                                    <input id="phone" onChange={( e ) => setphone( e.target.value )} type='text' className='form-control' />
                                </div>

                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Position/Title</label>
                                    <input id="position" onChange={( e ) => setposition( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Alignment </label>
                                    <select onChange={( e ) => setalignment( e.target.value )} className='form-control'>
                                        <option selected disabled >Choose...</option>
                                        <option>Vertical</option>
                                        <option>Non-Vertical</option>
                                    </select>
                                </div>

                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Previous Employer</label>
                                    <input id="previous_employer" onChange={( e ) => setprevious_employer( e.target.value )} type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-8'>
                                    <label>Prev Employer's Contact Information</label>
                                    <input id="previous_employer_contact" onChange={( e ) => setprevious_employer_contact( e.target.value )} type='text' className='form-control' />
                                </div>

                                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                                    <button disabled={disabled} onClick={( e ) => {
                                        e.preventDefault()
                                        submitEmployee()
                                    }} className='btn btn-outline-primary mx-2 px-md-5'>      {
                                            disabled == true ?
                                                <div className="d-flex aic jcc">
                                                    <div className="spinner-border spinner-border-sm mr-3 text-white" role="status" />
                                                    <span className="mt-1">Loading ... </span>
                                                </div>
                                                :
                                                'Register Employee'
                                        }</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
