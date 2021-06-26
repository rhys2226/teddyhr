import React, { useCallback } from 'react'
import { Alert, Fire } from '../../../components/Alerts/Alert'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form';
import { Auth } from '../../../services/auth.service';

type Props = {
    show: Boolean
    hide: Function
}

type Inputs = {
    From: any
    To: any
    Title: any
    Venue: any
    Type: any
    Agency: any
}

export default function AddSeminar( props: Props ) {

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
        data[ 'files' ] = files
        console.log( files )
        const formData = new FormData()
        for ( let key in data ) {
            if ( key !== 'files' ) {
                formData.append( key, data[ key ] )
            }
        }
        let i = 0;
        for ( let index of data[ 'files' ] ) {
            formData.append( `files${ i }`, index )
            i += 1
        }
        Fire( 'Add an Seminar?', 'Are you sure you want to add a seminar?', 'info', () => {
            setdisabled( true )
            const api = new Auth( 'seminars' );
            api.create( formData )
                .then( () => {
                    Alert( 'Seminar Added', 'Seminar successfully added', 'success' )
                    setfiles( [] )
                    setdisabled( false )
                } )
                .catch( () => {
                    Alert( 'Error', 'Something went Wrong', 'error' )
                    setdisabled( false )
                } )
        } )
    }



    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="card-deck">
                    <div className="card shadow mb-4">
                        <div className="card-header p-3">
                            <h2 className="card-title mt-2 mb-0">Seminar Form</h2>
                        </div>
                        <div className="card-body">
                            <div className="col-md-12 row">
                                <div className="col-md-12">
                                    <DropZone />
                                </div>
                                <div className="col-md-12 ">
                                    <form encType="multipart/form-data" onSubmit={handleSubmit( submit )}>
                                        <div className="row">
                                            <div className="form-group col-md-12 mb-4 mt-4">
                                                <label >Title of Seminar</label>
                                                <input  {...register( 'Title' )} className="form-control bg-light" type="text" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <label >From</label>
                                                <input  {...register( 'From' )} className="form-control bg-light" type="date" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <label >To</label>
                                                <input  {...register( 'To' )} className="form-control bg-light" type="date" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <label >Venue</label>
                                                <input   {...register( 'Venue' )} className="form-control bg-light" type="text" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <label >Type of Seminar </label>
                                                <select  {...register( 'Type' )} className="form-control bg-light" >
                                                    <option >International</option>
                                                    <option >National</option>
                                                    <option >Regional</option>
                                                    <option >Local</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12 mb-4">
                                                <label >Conducting Agency</label>
                                                <input  {...register( 'Agency' )} className="form-control bg-light" type="text" />
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
