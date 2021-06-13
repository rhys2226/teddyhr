import React from 'react'
import { Alert } from '../../Alerts/Alert'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type Props = {
    step1: Function
    makeStep: Function
}

export default function ApplicationStep1( props: Props ) {

    const [ phone, setphone ]: any = React.useState()

    return (
        <div>
            <h3>Personal Data</h3>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-3'>
                    <label>First Name</label>
                    <input id="First" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-3'>
                    <label>Middle Name</label>
                    <input id="Middle" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-3'>
                    <label>Last Name</label>
                    <input id="Last" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-3'>
                    <label>Name Extension</label>
                    <input id="NameExtension" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Phone</label>
                    <input id="Phone" style={{ display: 'none' }} value={phone} type='text' className='form-control' />
                    <PhoneInput
                        country={'ph'}
                        onChange={( phone ) => setphone( phone )}
                        containerStyle={{ width: '100%' }}
                    />
                </div>

                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => {
                        $( 'input' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )
                        const data: any = {
                            First: $( '#First' ).val(),
                            Last: $( '#Last' ).val(),
                            Middle: $( '#Middle' ).val(),
                            NameExtension: $( '#NameExtension' ).val(),
                            Phone: $( '#Phone' ).val(),
                        }
                        for ( let key in data ) {
                            if ( data[ key ] == "" ) {
                                $( `#${ key }` ).addClass( 'is-invalid' )
                                Alert( 'Check Again', 'One or more fields should not be empty', 'error' )
                                return
                            }
                            else {
                                $( `#${ key }` ).addClass( 'is-valid' )
                            }
                        }
                        props.makeStep( 2 )
                        props.step1( data )
                    }} className='btn btn-outline-success mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div >
    )
}
