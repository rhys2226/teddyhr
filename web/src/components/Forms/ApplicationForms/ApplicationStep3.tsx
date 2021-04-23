import React from 'react'

export default function ApplicationStep3( props: any ) {
    return (
        <div>
            <h3 className="mb-0">Attachments</h3>
            <p className="text-muted mt-0">Upload your CV or Resume, Application letter and other Supporting Doccuments</p>
            <div className='card shadow mb-4 mt-5'>
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
            <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                <button onClick={() => props.makeStep( 2 )} className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                <button onClick={() => props.makeStep( 4 )} className='btn btn-outline-success mx-2 px-md-5'>Next</button>
            </div>
        </div>
    )
}
