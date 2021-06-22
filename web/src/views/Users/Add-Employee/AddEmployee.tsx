import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from '../../../components/Alerts/Alert';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Auth } from '../../../services/auth.service';


export default function AddEmployee() {

    const [ phone, setphone ]: any = React.useState( '' )
    const [ disabled, setdisabled ] = useState( false )

    async function submitEmployee() {
        setdisabled( true )
        if ( avatar == "" ) {
            setdisabled( false )
            return Alert( 'Please Upload a Professional Photo', 'Human Resources Management Office System requires  to have a distinguisable professional photo', 'error' )
        }
        if ( $( '#Password' ).val() !== $( '#confirmpassword' ).val() ) {
            setdisabled( false )
            Alert( 'Error', `Passwords doesn't match`, 'error' )
            return
        }
        const data: any = {
            Email: $( '#Email' ).val(),
            Password: $( '#Password' ).val(),
            First: $( '#First' ).val(),
            Last: $( '#Last' ).val(),
            Middle: $( '#Middle' ).val(),
            NameExtension: $( '#NameExtension' ).val(),
            Phone: $( '#Phone' ).val(),
            Alignment: $( '#Alignment' ).val(),
            PreviousEmployer: $( '#PreviousEmployer' ).val(),
            EmployersContactInformation: $( '#EmployersContactInformation' ).val(),
            Position: $( '#Position' ).val(),
            confirmpassword: $( '#confirmpassword' ).val(),
            Type: 'Employee',
            Avatar: avatar
        }
        $( 'input' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )

        for ( let key in data ) {
            if ( data[ key ] === "" ) {
                if ( key !== 'NameExtension' ) {
                    $( `#${ key }` ).addClass( 'is-invalid' )
                    setdisabled( false )
                }
            }
        }
        const formData = new FormData()
        for ( let key in data ) {
            formData.append( key, data[ key ] )
        }
        axios.post( 'auth/register', formData, { headers: { "Content-Type": "multipart/form-data" } } )
            .then( ( auth: any ) => {
                Alert( 'Registration Successfull', auth.message, 'success' )
                for ( let key in data ) {
                    $( `#${ key }` ).val( '' )
                    $( `#${ key }` ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )
                }
                setavatar( '' )
                setdisabled( false )
            } )
            .catch( () => {
                Alert( 'Error!', 'Something went wrong', 'error' )
                setdisabled( false )
            } )

    }

    const [ avatar, setavatar ]: any = useState( '' )
    function Avatar() {
        return (
            <div className="col-md-3 text-center d-flex" >
                <input id="file-input" type="file" onChange={( event: any ) => {
                    var reader = new FileReader();
                    reader.onload = ( e: any ) => {
                        $( '#avatar12' ).attr( 'src', e.target.result );
                    }
                    setavatar( event.target.files[ 0 ] )
                    reader.readAsDataURL( event.target.files[ 0 ] );
                }} style={{ display: 'none' }} />

                <div onClick={() => {
                    $( '#file-input' ).click()
                }} className="avatar avatar-xl">
                    <img id="avatar12" style={{ cursor: 'pointer' }} src="http://localhost:3000/assets/placeholders/1.png" alt="..." className="avatar-img rounded-circle" />
                </div>
            </div>
        )
    }

    const verifyEmail = () => {
        const api = new Auth( 'verify-email' )
        api.fetch( {} )
    }


    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="card-deck">
                    <div className="card shadow mb-4">
                        <div className="card-header p-3">
                            <h2 className="card-title mt-2 mb-0">Employee Form</h2>
                        </div>
                        <div className="card-body">
                            <h5 className="text-info">Professional Photo</h5>
                            <Avatar />
                            <h6 className="text-danger-lighter mt-2 small">* Photo is required</h6>
                            <br />

                            <form className="row">
                                <div className="col-md-12 mb-2 mt-3">
                                    <h5 className="text-info">Credentials</h5>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <div className="d-flex mb-3">
                                        <label>Email</label>
                                        <i onClick={() => { verifyEmail() }} title="Verify Email" style={{ cursor: 'pointer' }} className="fe fe-mail ml-auto mr-3"></i>
                                    </div>
                                    <input id="Email" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required and needs email verification</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label className="mb-4">Password</label>
                                    <input id="Password" type='password' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label className="mb-4">Confirm Password</label>
                                    <input id="confirmpassword" type='password' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className="col-md-12 mb-2 mt-5">
                                    <h5 className="text-info">Personal Information</h5>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-3'>
                                    <label>First Name</label>
                                    <input id="First" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-3'>
                                    <label>Middle Name</label>
                                    <input id="Middle" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-3'>
                                    <label>Last Name</label>
                                    <input id="Last" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-3'>
                                    <label>Name Ext.</label>
                                    <input id="NameExtension" type='text' className='form-control' />
                                </div>
                                <div className='form-group mb-3 col-12 col-md-3  mt-5'>
                                    <label className="mb-4">Place of Birth</label>
                                    <input id="PlaceOfBirth" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4  mt-5'>
                                    <div className="d-flex mb-3">
                                        <label>Phone</label>
                                        <i title="Verify Phone" style={{ cursor: 'pointer' }} className="fe fe-phone-call ml-auto mr-3"></i>
                                    </div>
                                    <input value={phone} id="Phone" type='hidden' className='form-control' />
                                    <PhoneInput
                                        country={'ph'}
                                        onChange={( phone ) => setphone( phone )}
                                        containerStyle={{ width: '100%' }}
                                        isValid={phone.length == 12}
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required and needs phone verification</h6>
                                </div>


                                <div className="col-md-12 mb-2 mt-5">
                                    <h5 className="text-info">Professional Information</h5>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Position/Title</label>
                                    <input id="Position" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Alignment </label>
                                    <select id="Alignment" className='form-control'>
                                        <option></option>
                                        <option>Vertical</option>
                                        <option>Non-Vertical</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>

                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Previous Employer</label>
                                    <input id="PreviousEmployer" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Prev Employer's Contact Information</label>
                                    <input id="EmployersContactInformation" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>Salary</label>
                                    <input id="Salary" type='text' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='form-group mb-3 col-12 col-md-4'>
                                    <label>First Day of Service</label>
                                    <input id="FirstDay" type='date' className='form-control' />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                                    <button disabled={disabled} onClick={( e ) => {
                                        e.preventDefault()
                                        submitEmployee()
                                    }} className='btn btn-dark mx-2 px-md-5'>      {
                                            disabled == true ?
                                                <div className="d-flex aic jcc">
                                                    <div className="spinner-border spinner-border-sm" role="status" />
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
