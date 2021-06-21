import React from 'react'
import { Alert } from '../../Alerts/Alert'

type Props = {
    step4: Function
    makeStep: Function
}

export default function ApplicationStep4( props: Props ) {

    const [ Email, setEmail ] = React.useState( '' )
    const [ Password, setPassword ] = React.useState( '' )
    const [ confirmPassword, setconfirmPassword ] = React.useState( '' )

    return (
        <div>
            <h3>Sign-in</h3>
            <p>Credentials to track your employment</p>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Email</label>
                    <input onChange={( e ) => setEmail( e.target.value )} id="Email" type='email' required className='form-control' />
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Password</label>
                    <input onChange={( e ) => setPassword( e.target.value )} id="password" type='text' required className='form-control' />
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Confirm Password</label>
                    <input onChange={( e ) => setconfirmPassword( e.target.value )} id="confirm-password" type='text' required className='form-control' />
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => props.makeStep( 3 )} className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                    <button onClick={() => {
                        $( 'input, textarea, select' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )

                        if ( confirmPassword != Password ) {
                            Alert( 'Try Again', 'Your Password does not match', 'error' )
                            $( '#confirm-Password, #Password' ).addClass( 'is-invalid' )
                            return
                        }
                        $( '#confirm-Password, #Password' ).removeClass( 'is-invalid' )
                        $( '#confirm-Password, #Password' ).addClass( 'is-valid' )
                        const data: any = {
                            Email: Email,
                            Password: Password,
                            confirmPassword: confirmPassword,
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
                        props.step4( data )
                        props.makeStep( 5 )
                    }} className='btn btn-outline-success mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div>
    )
}
