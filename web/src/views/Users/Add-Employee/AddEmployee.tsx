import React from 'react'

export default function AddEmployee() {
    return (
        <div className="card-deck">
            <div className="card shadow mb-4">
                <div className="card-header">
                    <strong className="card-title">Employee form</strong>
                </div>
                <div className="card-body">
                    <form className="row">
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>First Name</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Last Name</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Middle Name</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Phone</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Email</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-2'>
                            <label>Alignment </label>
                            <select className='form-control'>
                                <option>Vertical</option>
                                <option>Non-Vertical</option>
                            </select>
                        </div>
                        <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                            <label>Educational Attainments</label>
                            <select multiple className='form-control'>
                                <option>Phd</option>
                                <option>Masters</option>
                                <option>Bachelor</option>
                                <option>Vocational</option>
                                <option>Secondary</option>
                                <option>Primary</option>
                            </select>
                        </div>
                        <div className='form-group mb-3 col-12 col-md-6 mt-2'>
                            <label>Eligibilities</label>
                            <select multiple className='form-control'>
                                <option>Civil Service</option>
                                <option>PRC</option>
                            </select>
                        </div>
                        <div className='form-group mb-3 col-12 col-md-12 mt-2'>
                            <label>Degrees (Separated with comma (,))</label>
                            <textarea className='form-control' placeholder="Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology "></textarea>
                        </div>
                        <div className='form-group mb-3 col-12 mt-2'>
                            <label>Work Experiences</label>
                            <textarea className='form-control'></textarea>
                        </div>
                        <div className='form-group mb-3 col-12 col-md-6'>
                            <label>Previous Employer</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mb-3 col-12 col-md-6'>
                            <label>Employer's Contact Information</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='card mb-3 col-12 col-md-12'>
                            <div className='card-body'>
                                <form action='/file-upload' className='dropzone bg-light rounded-lg' id='tinydash-dropzone'>
                                    <div className='dz-message needsclick'>
                                        <div className='circle circle-lg bg-primary'>
                                            <i className='fe fe-upload fe-24 text-white'></i>
                                        </div>
                                        <h5 className='text-muted mt-4'>Attach All Supporting Documents here. (Don't include Personal Data Sheet, Service Records, Office Performance and Performance Review, Leave Card)</h5>
                                    </div>
                                </form>
                                <div className='dropzone-previews mt-3' id='file-previews'></div>
                                <div className='d-none' id='uploadPreviewTemplate'>
                                    <div className='p-2'>
                                        <div className='row align-items-center'>
                                            <div className='col-auto'>
                                                <img data-dz-thumbnail src='#' className='avatar-sm rounded bg-light' alt='' />
                                            </div>
                                            <div className='col pl-0'>
                                                <a
                                                    href='javascript:void(0);'
                                                    className='text-muted font-weight-bold'
                                                    data-dz-name></a>
                                                <p className='mb-0' data-dz-size></p>
                                            </div>
                                            <div className='col-auto'>
                                                <a href='' className='btn btn-link btn-lg text-muted' data-dz-remove>
                                                    <i className='dripicons-cross'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-12">
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
                        </div>
                        <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                            <button className='btn btn-outline-primary mx-2 px-md-5'>Submit Employee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
