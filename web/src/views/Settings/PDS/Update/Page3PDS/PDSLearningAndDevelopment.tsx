import React from 'react'
import { Alert, Fire } from '../../../../../components/Alerts/Alert'
import { Auth } from '../../../../../services/auth.service'

export default function PDSLearningAndDevelopment() {

    const userData: any = localStorage.getItem( 'user' )
    const [ addForm, setaddForm ] = React.useState( [ 1 ] );

    const submit = async () => {
        let data: any = {
            learningAndDevelopment: []
        }
        for ( let i = 0; i < addForm.length; i++ ) {
            let input = $( '.data' + i + ' input, select ' )
            let object: any = {}
            for ( let index in input ) {
                if ( input[ index ].id == undefined ) {
                    break
                }
                object[ input[ index ].id ] = $( '#' + input[ index ][ 'id' ] ).val()
            }
            data[ 'learningAndDevelopment' ].push( object )
        }
        data[ 'employee_id' ] = JSON.parse( userData ).id

        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                let api = new Auth( 'learning-and-development' )
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
            <h5 className="bold mt-4 mb-4">LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED
                <br />
                <small className="text-muted" style={{ fontSize: '.8rem' }}> (START FROM THE MOST RECENT L&D/TRAINING PROGRAM AND INCLUDE ONLY THE RELEVANT L&D/TRAINING TAKEN FOR THE LAST FIVE (5) YEARS FOR DIVISION CHIEF/EXECUTIVE/MANAGERIAL POSITIONS)</small>
            </h5>
            <br />
            <br />
            <div className="col-md-6 mb-4 p-0 m-0 d-flex">
                <button
                    onClick={() => {
                        setaddForm( [ ...addForm, 1 ] );
                    }} className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span>Add L&D</span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setaddForm( [ 1 ] );
                    }}
                    className="btn btn-outline-danger d-flex aic jcc ml-3">
                    <i className="fe fe-refresh-ccw"></i>&nbsp;&nbsp;&nbsp;
                    <span>Reset </span>
                </button>
            </div>


            {
                addForm.map( ( value, index ) => (
                    <div key={index} className={`data${ index }`}>
                        <h6 className="bold mt-4 mb-4 text-info">L&D INTERVENTIONS/TRAINING PROGRAMS ATTENDED  {index + 1}</h6>
                        <div className="row mb-4">
                            <div className="col-md-12 mb-4">
                                <label htmlFor=""> TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS/TRAINING PROGRAMS (Write in full)</label>
                                <input id={`Title${ index }`} type="text" className="form-control" />
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="">FROM</label>
                                <input id={`From${ index }`} type="date" className="form-control" />
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="">TO</label>
                                <input id={`To${ index }`} type="date" className="form-control" />
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">NUMBER OF HOURS</label>
                                <input id={`Hours${ index }`} type="number" className="form-control" />
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Type of LD ( Managerial/ Supervisory/ Technical/etc) CONDUCTED/ SPONSORED BY</label>
                                <input id={`Type${ index }`} type="text" className="form-control" />
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor=""> CONDUCTED/ SPONSORED BY(Write in full/Do not abbreviate)</label>
                                <input id={`SponsoredBy${ index }`} type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                ) )
            }


            <div className="mt-2 mb-4 d-flex aij jcc">
                <button onClick={() => [
                    submit()
                ]} className="btn btn-outline-primary">Update L&D Attended</button>
            </div>
        </div>
    )
}
