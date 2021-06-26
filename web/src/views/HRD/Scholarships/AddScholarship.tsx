import React, { useCallback } from 'react'
import { Alert, Fire } from '../../../components/Alerts/Alert'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form';

type Props = {
    show: Boolean
    hide: Function
}

type Inputs = {

}

export default function AddScholarship( props: Props ) {

    const [ files, setfiles ] = React.useState( [] )
    const { register, handleSubmit } = useForm<Inputs>();
    const userData: any = localStorage.getItem( 'user' )
    const [ disabled, setdisabled ] = React.useState( false )


    function DropZone() {
        const onDrop = useCallback( acceptedFiles => {
            setfiles( acceptedFiles )
        }, [] )

        const { getRootProps, getInputProps, isDragActive } = useDropzone( { onDrop } )
        return (
            <div className='card shadow mb-4 mt-5' {...getRootProps()}>
                <input id="awards" accept="image/*" {...getInputProps()} />
                <div className='card-body'>
                    <form action='/file-upload' className='dropzone bg-light rounded-lg' id='tinydash-dropzone'>
                        <div className='dz-message needsclick'>
                            <div className='circle circle-lg bg-dark'>
                                <i className='fe fe-file-text fe-24 text-white'></i>
                            </div>
                            <h5 className='text-muted mt-4'>Drop communication letter here or click to upload</h5>
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
        )
    }

    const submit = async ( data: any ) => {

    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-6">
                <div className="card-deck">
                    <div className="card shadow mb-4">
                        <div className="card-header p-3">
                            <strong className='card-title'>Scholarship Form</strong>
                        </div>
                        <div className="card-body">
                            <div className="col-md-12 row">
                                <div className="col-md-12">
                                    <DropZone />
                                </div>
                                <div className="col-md-12 ">
                                    <form encType="multipart/form-data" onSubmit={handleSubmit( submit )}>
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label >Title of Scholarship</label>
                                                <input className="form-control bg-light" type="text" />
                                            </div>
                                            <div className="form-group col-md-12 d-flex aic jcc mt-5">
                                                <button disabled={disabled} className="btn btn-dark float-right">
                                                    {
                                                        disabled == true ?

                                                            <div className="d-flex aic jcc">
                                                                <div className="spinner-border spinner-border-sm" role="status" />
                                                            </div>
                                                            :
                                                            'Save Seminar'
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
