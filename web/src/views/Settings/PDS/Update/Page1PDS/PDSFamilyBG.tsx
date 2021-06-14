import React from 'react'
import { Alert, Fire } from '../../../../../components/Alerts/Alert'
import { useForm } from 'react-hook-form'
import { Auth } from '../../../../../services/auth.service'

type Inputs = {
    employee_id: undefined
    SpouseFirst: undefined
    SpouseLast: undefined
    SpouseMiddle: undefined
    SpouseExt: undefined
    MotherFirst: undefined
    MotherLast: undefined
    MotherMiddle: undefined
    MotherExt: undefined
    FatherFirst: undefined
    FatherLast: undefined
    FatherMiddle: undefined
    FatherExt: undefined
    Occupation: undefined
    BusinessName: undefined
    BusinessAddress: undefined
    Telephone: undefined
}

export default function PDSFamilyBG() {

    const userData: any = localStorage.getItem( 'user' )
    const { register, handleSubmit } = useForm<Inputs>();

    const [ addForm, setaddForm ] = React.useState( [ 1 ] );



    const submit = async ( data: any ) => {
        data[ 'children' ] = []

        for ( let i = 0; i < addForm.length; i++ ) {
            let supervised = $( '.Children' + i + ' input' )
            let object: any = {}
            for ( let index in supervised ) {
                if ( supervised[ index ].id == undefined ) {
                    break
                }
                object[ supervised[ index ].id ] = $( '#' + supervised[ index ][ 'id' ] ).val()
            }
            data[ 'children' ].push( object )
        }

        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                let api = new Auth( 'family-background' )
                api.create( data, {} ).then( () => {
                    Alert(
                        'PDS Successfully Updated',
                        'You have successfully updated your Personal Data Sheet',
                        'success',
                    )
                } )
                    .catch( () => {
                        Alert(
                            'Error',
                            'Erro Updating Personal Data Sheet. Try Again',
                            'error',
                        )
                    } )
            }
        )
    }


    return (
        <div className="card-body card">
            <form onSubmit={handleSubmit( submit )}>
                <h5 className="bold mt-4 mb-4">FAMILY BACKGROUND</h5>
                <div className="row mb-4">
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'employee_id' )} />
                    <div className="col-md-3">
                        <label htmlFor="">SPOUSE'S  SURNAME</label>
                        <input  {...register( 'SpouseLast' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">FIRST NAME</label>
                        <input  {...register( 'SpouseFirst' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">MIDDLE  NAME</label>
                        <input   {...register( 'SpouseMiddle' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">NAME EXTENSION</label>
                        <input  {...register( 'SpouseExt' )} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <label htmlFor="">OCCUPATION</label>
                        <input {...register( 'Occupation' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">EMPLOYER/BUSINESS NAME</label>
                        <input {...register( 'BusinessName' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">BUSINESS ADDRESS</label>
                        <input {...register( 'BusinessAddress' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">TELEPHONE NO.</label>
                        <input {...register( 'Telephone' )} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <label htmlFor="">FATHERS'S  SURNAME</label>
                        <input   {...register( 'FatherLast' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">FIRST NAME</label>
                        <input   {...register( 'FatherFirst' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">MIDDLE  NAME</label>
                        <input   {...register( 'FatherMiddle' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">NAME EXTENSION</label>
                        <input   {...register( 'FatherExt' )} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <label htmlFor="">MOTHERS'S  SURNAME</label>
                        <input {...register( 'MotherLast' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">FIRST NAME</label>
                        <input {...register( 'MotherFirst' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">MIDDLE  NAME</label>
                        <input {...register( 'MotherMiddle' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">NAME EXTENSION</label>
                        <input {...register( 'MotherExt' )} type="text" className="form-control" />
                    </div>
                </div>

                <h5 className="col-md-12 bold m-0 p-0  mt-3 mb-3">CHILDRENS</h5>
                <div className="col-md-6 mb-4 p-0 m-0 d-flex">
                    <button
                        type="button"
                        onClick={() => {
                            setaddForm( [ ...addForm, 1 ] );
                        }}
                        className="btn btn-outline-dark d-flex aic jcc">
                        <i className="fe fe-plus"></i>
                        <span> Add Child</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setaddForm( [ 1 ] );
                        }}
                        className="btn btn-outline-danger d-flex aic jcc ml-3">
                        <i className="fe fe-plus"></i>
                        <span> Reset</span>
                    </button>
                </div>
                {
                    addForm.map( ( value, index ) => (
                        <div className={`row mb-4 Children${ index }`}>
                            <div className="col-md-6">
                                <label htmlFor="">NAME OF CHILD</label>
                                <input id={`Name${ index }`} type="text" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">DATE OF BIRTH </label>
                                <input id={`DOB${ index }`} type="date" className="form-control" />
                            </div>
                        </div>
                    ) )
                }

                <div className="mt-5 mb-4 d-flex aij jcc">
                    <button
                        className="btn btn-outline-primary">Update Family Background</button>
                </div>
            </form>
        </div>
    )
}
