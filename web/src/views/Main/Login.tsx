import React, { FC, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Alert, Fire } from '../../components/Alerts/Alert';
import firebase from 'firebase/app';
import 'firebase/auth';
import { auth, collection } from '../../Firebase/firebase';

type Props = {};

const Login: FC<Props> = ( props ) => {
    const history = useHistory()

    const [ username, setusername ] = useState( '' )
    const [ password, setpassword ] = useState( '' )
    const [ disabled, setdisabled ] = useState( false )

    async function login() {
        setdisabled( true )
        auth().signInWithEmailAndPassword( username, password )
            .then( ( Credentials ) => {
                const user = JSON.stringify( Credentials.user )
                localStorage.setItem( 'user', user )
                history.replace( 'home' )
                $( '.large-modal' ).hide()
                $( '.modal-backdrop' ).hide();
            } )
            .catch( ( error ) => {
                for ( let key in error ) {
                    if ( key == 'code' || key == 'message' )
                        Alert( 'Authentication Failed', error[ key ], 'error' )
                }
            } )
        setdisabled( false )
    }

    return (
        <div className='row align-items-center h-100'>
            <form className='col-lg-5'>
                <div className="mt-2 p-0 mr-3">
                    <h1 className="text-info m-0">HRMO</h1>
                </div>
                <br />
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className=" fe fe-user"></i>
                        </span>
                    </div>
                    <input onChange={( e ) => { setusername( e.target.value ) }} type="email" required className="form-control" placeholder="Email" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className=" fe fe-lock"></i>
                        </span>
                    </div>
                    <input onChange={( e ) => { setpassword( e.target.value ) }} type="password" required className="form-control" placeholder="Password" />
                </div>
                <button disabled={disabled} onClick={( e ) => { e.preventDefault(); login() }} className='btn btn-lg btn-info btn-block' type='submit'>
                    {
                        disabled == true ?

                            <div className="d-flex aic jcc">
                                <div className="spinner-border spinner-border-sm mr-3 text-white" role="status" />
                                <span className="mt-1">Loading ... </span>
                            </div>
                            :
                            'Login'
                    }
                </button>
                <p className='mt-5 mb-3 text-muted'>© Developed By | Teddy Fuentivilla </p>
            </form>
        </div >
    );
};

export default Login;
