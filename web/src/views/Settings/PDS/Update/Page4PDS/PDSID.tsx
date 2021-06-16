import React from 'react'
import { Alert, Fire } from '../../../../../components/Alerts/Alert'
import { useForm } from 'react-hook-form'
import { Auth } from '../../../../../services/auth.service'
import { Identification } from '../../../../../components/Doc/PDS/PDSInterface'

type Inputs = {
    employee_id: undefined,
    GovtID: '',
    Passport: '',
    Date: '',
}


export default function PDSID( props: {
    Idenification: Identification
} ) {

    const userData: any = localStorage.getItem( 'user' )
    const { register, handleSubmit, setValue } = useForm<Inputs>();

    const { Idenification } = props

    React.useEffect( () => {
        setValue( 'GovtID', Idenification.GovtID )
        setValue( 'Passport', Idenification.Passport )
        setValue( 'Date', Idenification.Date )
    }, [] )

    const submit = async ( data: any ) => {
        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                console.log( data )
                let api = new Auth( 'identification' )
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
                <h5 className="bold mt-4 mb-4">IDENTIFICATION</h5>

                <h6 className="bold mt-4 mb-4 text-info">Government Issued ID (i.e.Passport, GSIS, SSS, PRC, Driver's License, etc)PLEASE INDICATE ID Number and Date of Issuance</h6>

                <div className="row mb-4">
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'employee_id' )} />
                    <div className="col-md-4 mb-4">
                        <label htmlFor="">Government Issued ID</label>
                        <input  {...register( 'GovtID' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label htmlFor="">ID/License/Passport No</label>
                        <input  {...register( 'Passport' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label htmlFor="">Date/Place of Issuance</label>
                        <input  {...register( 'Date' )} type="text" className="form-control" />
                    </div>
                </div>

                <div className="mt-2 mb-4 d-flex aij jcc">
                    <button className="btn btn-outline-primary">Update identification</button>
                </div>
            </form>
        </div>
    )
}
