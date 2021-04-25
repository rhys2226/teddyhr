import React from 'react'

export default function AwardsAndRecognition() {
    return (
        <div className="col-md-12 my-4 ">
            <h2 className="h4 mb-1 ml-5">Add an Award</h2>
            <div className="col-md-12 row">
                <div className="col-md-6">
                    <div className="card-body">
                        <div className='card shadow mb-4 mt-1'>
                            <div className='card-body mt-5'>
                                <form action='/file-upload' className='dropzone bg-light rounded-lg' id='tinydash-dropzone'>
                                    <div className='dz-message needsclick'>
                                        <div className='circle circle-lg bg-primary'>
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
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="card-body ">
                        <div className='card shadow mb-4'>
                            <div className="card row ">
                                <div className="form-group col-md-12 mt-1">
                                    <label >Employee</label>
                                    <select className="form-control bg-light" >
                                        <option selected disabled>Choose..</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <label >Award Title</label>
                                    <input className="form-control bg-light" type="text" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label >Description</label>
                                    <textarea className="form-control bg-light" />
                                </div>
                                <div className="form-group col-md-12">
                                    <button className="btn btn-primary float-right">Save Award</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
