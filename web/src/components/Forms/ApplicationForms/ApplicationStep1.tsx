import React from 'react'
import { Alert } from '../../Alerts/Alert'

type Props = {
    step1: Function
    makeStep: Function
}

export default function ApplicationStep1( props: Props ) {




    return (
        <div>
            <h3>Personal Data</h3>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>First Name</label>
                    <input id="first" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Last Name</label>
                    <input id="last" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Middle Name</label>
                    <input id="middle" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Phone</label>
                    <input id="phone" type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Email</label>
                    <input id="email" type='text' className='form-control' />
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => {
                        $( 'input' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )
                        const data: any = {
                            first: $( '#first' ).val(),
                            last: $( '#last' ).val(),
                            middle: $( '#middle' ).val(),
                            phone: $( '#phone' ).val(),
                            email: $( '#email' ).val(),
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
