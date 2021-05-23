import React from 'react'
import { Alert, Fire } from '../../../components/Alerts/Alert'

type Props = {
    show: Boolean
    hide: Function
}
export default function AddSeminar( props: Props ) {
    return (
        <div style={{ display: props.show == false ? 'none' : 'block' }} className="my-4 p-5 m-0 col-md-12 row">
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
                                    <a className='text-muted font-weight-bold'
                                        data-dz-name></a>
                                    <p className='mb-0' data-dz-size></p>
                                </div>
                                <div className='col-auto'>
                                    <a className='btn btn-link btn-lg text-muted' data-dz-remove>
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
                <div className="col-md-12 d-flex aic jcc mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            Fire( 'Add Seminar?', 'Are you sure you want to Add Seminar?', 'info', () => {
                                Alert( 'Seminar Added', '', 'success' )
                                props.hide()
                            } )
                        }}
                        className="btn btn-outline-primary float-right">Add Seminar</button>
                </div>
            </form>
        </div>
    )
}
