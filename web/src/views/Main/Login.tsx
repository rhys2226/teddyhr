import React, { FC, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import * as base from './../../constants/base'
import { Alert, Fire } from '../../components/Alerts/Alert';

type Props = {};

const Login: FC<Props> = ( props ) => {
    const history = useHistory()

    const [ username, setusername ] = useState( '' )
    const [ password, setpassword ] = useState( '' )
    const [ disabled, setdisabled ] = useState( false )

    async function login() {
        setdisabled( true )
        const data = {
            username: username,
            password: password,
        }
        const url = `${ base.api }auth/login`
        await axios.post( url, data )
            .then( function ( response ) {
                $( '.modal-backdrop' ).toggle();
                history.replace( 'home' )
            } ).catch( () => [
                Alert( 'Error', 'Invalid Username or Password', 'error' )
            ] )
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
                    <input onChange={( e ) => { setusername( e.target.value ) }} type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className=" fe fe-lock"></i>
                        </span>
                    </div>
                    <input onChange={( e ) => { setpassword( e.target.value ) }} type="password" className="form-control" placeholder="Password" />
                </div>
                <button disabled={disabled} onClick={( e ) => { e.preventDefault(); login() }} className='btn btn-lg btn-info btn-block' type='submit'>
                    Login
                </button>
                <p className='mt-5 mb-3 text-muted'>© Developed By | Teddy Fuentivilla </p>
            </form>
        </div >
    );
};

export default Login;
