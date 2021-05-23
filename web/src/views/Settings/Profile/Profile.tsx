import React from 'react'
import { Fire } from '../../../components/Alerts/Alert'

export default function Profile() {
    return (
        <div>
            <div className="row mt-5 align-items-center">
                <div className="col-md-3 text-center mb-5">
                    <div className="avatar avatar-xl">
                        <img style={{ cursor: 'pointer' }} src="http://localhost:3000/assets/avatars/face-7.jpg" alt="..." className="avatar-img   rounded-circle " />
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">Fuentevilla, Teddy Doe</h4>
                            <p className="small mb-3"><span className="badge bg-primary-lighter text-primary p-1 br-2" style={{ fontWeight: 900, }}>Developer</span></p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-7">
                            <p className="text-muted"> Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology </p>
                        </div>
                        <div className="col">
                            <p className="small mb-0 text-muted">teddy@gmail.com</p>
                            <p className="small mb-0 text-muted">Vertically Alligned</p>
                            <p className="small mb-0 text-muted">0928-624-1875</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="my-4">
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Lastname</label>
                        <input type="text" id="lastname" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label>
                            Middle Name</label>
                        <input type="text" id="lastname" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label >Phone</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label >Email</label>
                        <input type="email" className="form-control" />
                    </div>
                </div>
            </div>


            <h3 className="mb-0">New Documents</h3>
            <p className="text-muted mt-0">Previous documents will not be overwritten</p>
            <div className='card shadow mb-4 mt-1 mb-5'>
                <div className='card-body'>
                    <form action='/file-upload' className='dropzone bg-light rounded-lg' id='tinydash-dropzone'>
                        <div className='dz-message needsclick'>
                            <div className='circle circle-lg bg-dark'>
                                <i className='fe fe-upload fe-24 text-white'></i>
                            </div>
                            <h5 className='text-muted mt-4'>Drop files here or click to upload</h5>
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

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Old Password</label>
                        <input type="password" className="form-control" id="inputPassword5" />
                    </div>
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="password" className="form-control" id="inputPassword5" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="inputPassword6" />
                    </div>
                </div>
                <div className="col-md-6">
                    <p className="mb-2">Password requirements</p>
                    <p className="small text-muted mb-2"> To create a new password, you have to meet all of the following requirements: </p>
                    <ul className="small text-muted pl-4 mb-0">
                        <li> Minimum 8 character </li>
                        <li>At least one special character</li>
                        <li>At least one number</li>
                        <li>Can’t be the same as a previous password </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex aic jcc">
                <button
                    onClick={() => {
                        Fire( 'Update Account', 'Are you sure you want to Update your Account?', 'info', () => { } )
                    }}
                    type="submit" className="btn btn-dark">Save Changes</button>
            </div>
        </div>
    )
}
