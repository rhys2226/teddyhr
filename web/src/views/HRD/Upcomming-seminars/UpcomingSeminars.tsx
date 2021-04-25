import React from 'react'

export default function UpcomingSeminars() {
    return (
        <div className="row justify-content-center">
            <div className=" card col-12 col-lg-10 col-xl-8">
                <div className="card-header d-flex">
                    <span className=" mr-1"><i className="fe fe-mic  "></i>4</span>
                    <strong className="card-title">Upcoming Seminars</strong>
                    <button type="submit" className="btn btn-outline-primary ml-auto">Add Seminar</button>
                </div>
                <div className="card-body">
                    <div className="my-4">
                        <h3 className="mb-0">Seminar Photos</h3>
                        <p className="text-muted mt-0">Upload your images files</p>
                        <div className='card shadow mb-4 mt-1'>
                            <div className='card-body'>
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
                        <form className="row">
                            <div className="form-group col-md-6">
                                <label >Seminar Name</label>
                                <input className="form-control bg-light" type="text" />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Seminar Date</label>
                                <input className="form-control bg-light" type="date" />
                            </div>
                            <div className="form-group col-md-12">
                                <label >Description</label>
                                <textarea className="form-control bg-light"  ></textarea>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary float-right">Submit Seminar</button>
                            </div>
                        </form>
                    </div>
                    <div className="row align-items-center mb-4">
                        <div className="col-auto">
                            <div className="avatar avatar-sm mb-3 mx-4">
                                <img src="http://localhost:3000//assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="col">
                            <strong>IT Convention <span className="badge badge-danger">New</span></strong>
                            <div className="mb-2">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
                            <div className="card mb-3 bg-light w-50">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-2 text-center">
                                        <img src="http://localhost:3000//assets/products/p1.jpg" alt="..." className="img-fluid rounded m-1" />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body py-0">
                                            <p className="card-title mb-0">New screenshot-12.png</p>
                                            <div className="card-text my-0 text-muted small"><span className="mr-2">1.2M</span><span className="mr-2">SVG</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">2020-04-21 08:48:18</small>
                        </div>
                        <div className="col-auto">
                            <button className="btn bg-primary-lighter text-primary">Join</button>
                        </div>
                    </div>
                    <div className="row align-items-center mb-4">
                        <div className="col-auto">
                            <div className="avatar avatar-sm mb-3 mx-4">
                                <img src="http://localhost:3000//assets/avatars/face-4.jpg" alt="..." className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="col">
                            <strong>Leadership Training <span className="badge badge-danger">New</span></strong>
                            <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin luctus pretium. <br />Pellentesque porta massa ac nibh finibus iaculis. Maecenas vel interdum urna. Integer auctor ultrices faucibus. Aliquam consequat et ligula nec sodales.</div>
                            <small className="text-muted">2020-04-21 12:01:22</small>
                        </div>
                        <div className="col-auto">
                            <button className="btn bg-primary-lighter text-primary">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
