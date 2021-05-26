import React from 'react'
import { Alert } from '../../Alerts/Alert'

type Props = {
    data: Function
    makeStep: Function
}

export default function ApplicationStep1( props: Props ) {

    const [ first, setfirst ] = React.useState( '' )
    const [ last, setlast ] = React.useState( '' )
    const [ middle, setmiddle ] = React.useState( '' )
    const [ phone, setphone ] = React.useState( '' )
    const [ email, setemail ] = React.useState( '' )

    return (
        <div>
            <h3>Personal Data</h3>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>First Name</label>
                    <input id="first" onChange={( e ) => setfirst( e.target.value )} type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Last Name</label>
                    <input id="last" onChange={( e ) => setlast( e.target.value )} type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Middle Name</label>
                    <input id="middle" onChange={( e ) => setmiddle( e.target.value )} type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Phone</label>
                    <input id="phone" onChange={( e ) => setphone( e.target.value )} type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Email</label>
                    <input id="email" onChange={( e ) => setemail( e.target.value )} type='text' className='form-control' />
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => {
                        $( 'input' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )
                        const data: any = {
                            first: first,
                            last: last,
                            middle: middle,
                            phone: phone,
                            email: email,
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
                        props.data( data )
                    }} className='btn btn-outline-success mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div >
    )
}
