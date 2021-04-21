import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';


type Props = {};

const Login: FC<Props> = ( props ) => {
    return (
        <div className='row align-items-center h-100'>
            <form className='col-lg-12'>
                <div className="mt-2 p-0 mr-3">
                    <h1 className=" m-0">HMRO</h1>
                </div>
                <br />
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className=" fe fe-user"></i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className=" fe fe-lock"></i>
                        </span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button className='btn btn-lg btn-danger btn-block' type='submit'>
                    Login
					</button>
                <p className='mt-5 mb-3 text-muted'>© Developed By | Teddy Fuentivilla </p>
            </form>
        </div>
    );
};

export default Login;
