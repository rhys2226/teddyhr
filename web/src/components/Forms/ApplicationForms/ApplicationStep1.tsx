import React from 'react'

export default function ApplicationStep1() {
    return (
        <div>
            <h3>Personal Data</h3>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>First Name</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Last Name</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label>Middle Name</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Phone</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group mb-3 col-12 col-md-6'>
                    <label>Email</label>
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
