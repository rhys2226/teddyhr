import React from 'react'

export default function ApplicationStep4() {
    return (
        <div>
            <h3>Sign-in</h3>
            <p>Credentials to track your employment</p>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Username</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Password</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Confirm Password</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                    <button className='btn btn-outline-success mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div>
    )
}
