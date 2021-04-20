import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

type Props = {};

const Login: FC<Props> = (props) => {
	return (
		<div className='wrapper vh-100 overflow-hidden'>
			<div className='row align-items-center h-100'>
				<form className='col-lg-3 col-md-4 col-10 mx-auto text-center'>
					<Link className='navbar-brand mx-auto mt-2 flex-fill text-center' to='/'>
						<Logo />
					</Link>
					<h1 className='h6 mb-3'>Sign In</h1>
					<div className='form-group'>
						<label htmlFor='email' className='sr-only'>
							Email address
						</label>
						<input type='email' id='email' className='form-control form-control-lg' placeholder='Email Address' />
					</div>
					<div className='form-group'>
						<label htmlFor='password' className='sr-only'>
							Password
						</label>
						<input type='password' id='password' className='form-control form-control-lg' placeholder='Password' />
					</div>
					<div className='checkbox mb-3'>
						<label>
							<input type='checkbox' value='remember-me' /> Stay logged in
						</label>
					</div>
					<button className='btn btn-lg btn-primary btn-block' type='submit'>
						Login
					</button>
					<p className='mt-5 mb-3 text-muted'>© 2021</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
