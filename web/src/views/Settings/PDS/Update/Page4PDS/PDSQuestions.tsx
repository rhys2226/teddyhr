import React from 'react'
import { Alert, Fire } from '../../../../../components/Alerts/Alert'
import { QuestionDetails } from '../../../../../components/Doc/PDS/PDSInterface'
import { Auth } from '../../../../../services/auth.service'

export default function PDSQuestions( props: any ): any {

    const [ q0, setq0 ] = React.useState( false )
    const [ q1, setq1 ] = React.useState( false )
    const [ q2, setq2 ] = React.useState( false )
    const [ q3, setq3 ] = React.useState( false )
    const [ q4, setq4 ] = React.useState( false )
    const [ q5, setq5 ] = React.useState( false )
    const [ q6, setq6 ] = React.useState( false )
    const [ q7, setq7 ] = React.useState( false )
    const [ q8, setq8 ] = React.useState( false )
    const [ q9, setq9 ] = React.useState( false )
    const [ q10, setq10 ] = React.useState( false )
    const [ q11, setq11 ] = React.useState( false )

    const userData: any = localStorage.getItem( 'user' )

    React.useEffect( () => {
        distribute()
    }, [] )


    function distribute() {
        let array = [ 'ThirdDegree', 'ForuthDegree', 'FoundGuility', 'CriminallyCharged', 'BeenConvicted', 'Seperated', 'Candidate', 'Resigned', 'Immigrant', 'Indigenous', 'Disability', 'solo_parent' ]
        let index = 0
        for ( let i = 0; i < 11; i++ ) {
            for ( let key in props[ array[ i ] ] ) {
                if (
                    key === 'Question' ||
                    key === 'Answer' ||
                    key === 'Details'
                ) {
                    if ( key === 'Answer' && props[ array[ i ] ][ key ] == 'Yes' ) {
                        setTrue( i )
                    }
                    $( '#' + key + index ).val( props[ array[ i ] ][ key ] )
                }
            }
            index += 1
        }
    }

    function setTrue( index: number ) {
        if ( index === 0 ) {
            setq0( true )
        }
        if ( index === 1 ) {
            setq1( true )
        }
        if ( index === 2 ) {
            setq2( true )
        }
        if ( index === 3 ) {
            setq3( true )
        }
        if ( index === 4 ) {
            setq4( true )
        }
        if ( index === 5 ) {
            setq5( true )
        }
        if ( index === 6 ) {
            setq6( true )
        }
        if ( index === 7 ) {
            setq7( true )
        }
        if ( index === 8 ) {
            setq8( true )
        }
        if ( index === 9 ) {
            setq9( true )
        }
        if ( index === 10 ) {
            setq9( true )
        }
        if ( index === 10 ) {
            setq9( true )
        }
    }



    return (
        <div className="card-body card">
            <h4 className=" mt-4 mb-4 text-info">Are you related by consanguinity or affinity to the appointing or recommending authority, or to the chief of bureau or office or to the person who has immediate supervision over you Bureau or Department where you will be apppointed.</h4>

            <div className="row mb-2">
                <div className="col-md-12 mb-4 data0 card shadow card-body">
                    <label htmlFor="">Within the third degree?</label>
                    <input id="Question0" value="Within the third degree?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq0( true )
                        }
                        return setq0( false )
                    }} id="Answer0" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-0" style={{ display: q0 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details0" type="text" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>

                <div className="col-md-12 mb-2 data1  card shadow card-body">
                    <label htmlFor="">Within the fourth degree (for Local Government Unit - Career Employees)?</label>
                    <input id="Question1" value="Within the fourth degree (for Local Government Unit - Career Employees)?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq1( true )
                        }
                        return setq1( false )
                    }} id="Answer1" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q1 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details1" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>


            <div className="row mb-4">
                <div className="col-md-12 mb-4 data2  card shadow card-body">
                    <label htmlFor="">Have you ever been found guilty of any administrative offense?</label>
                    <input id="Question2" value="Have you ever been found guilty of any administrative offense?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq2( true )
                        }
                        return setq2( false )
                    }} id="Answer2" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q2 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details2" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>

                <div className="data3 col-md-12 mb-2  card shadow card-body">
                    <label htmlFor="">Have you been criminally charged before any court?</label>
                    <input id="Question3" value="Have you been criminally charged before any court?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq3( true )
                        }
                        return setq3( false )
                    }} id="Answer3" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q3 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details3" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>


            <div className="row mb-4">
                <div className="col-md-12 mb-2 data4  card shadow card-body">
                    <label htmlFor="">Have you ever been convicted of any crime or violation of any law, decree, ordinance or regulation by any court or tribunal?</label>
                    <input id="Question4" value="Have you ever been convicted of any crime or violation of any law, decree, ordinance or regulation by any court or tribunal?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq4( true )
                        }
                        return setq4( false )
                    }} id="Answer4" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q4 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details4" type="text" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>


            <div className="row mb-4">
                <div className="col-md-12 mb-2 data5  card shadow card-body">
                    <label htmlFor="">Have you ever been separated from the service in any of the following modes: resignation, retirement, dropped from the rolls, dismissal, termination, end of term, finished contract or phased out (abolition) in the public or private sector?</label>
                    <input id="Question5" value="Have you ever been separated from the service in any of the following modes: resignation, retirement, dropped from the rolls, dismissal, termination, end of term, finished contract or phased out (abolition) in the public or private sector?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq5( true )
                        }
                        return setq5( false )
                    }} id="Answer5" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q5 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details5" type="text" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>


            <div className="row mb-4">
                <div className="col-md-12 mb-2 data6 card shadow card-body">
                    <label htmlFor=""> Have you ever been a candidate in a national or local election held within the last year (except Barangay election)?</label>
                    <input id="Question6" value=" Have you ever been a candidate in a national or local election held within the last year (except Barangay election)?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq6( true )
                        }
                        return setq6( false )
                    }} id="Answer6" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q6 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details6" type="text" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>


            <div className="row mb-4">
                <div className="col-md-12 mb-2 data7 card shadow card-body">
                    <label htmlFor="">Have you resigned from the government service during the three (3)-month period before the last election to promote/actively campaign for a national or local candidate?</label>
                    <input id="Question7" value="Have you resigned from the government service during the three (3)-month period before the last election to promote/actively campaign for a national or local candidate?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq7( true )
                        }
                        return setq7( false )
                    }} id="Answer7" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q7 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details7" type="text" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>

            <div className="row mb-2 data8 card shadow card-body">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Have you acquired the status of an immigrant or permanent resident of another country?</label>
                    <input id="Question8" value="Have you acquired the status of an immigrant or permanent resident of another country?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq8( true )
                        }
                        return setq8( false )
                    }} id="Answer8" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q8 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details8" type="text" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>

            <h4 className=" mt-4 mb-4 text-info"> Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act of 2000 (RA 8972), please answer the following items:</h4>
            <div className="row mb-2 data9 card shadow card-body">
                <div className="col-md-12 mb-4">
                    <label htmlFor=""> Are you a member of any indigenous group?</label>
                    <input id="Question9" value="Are you a member of any indigenous group?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq9( true )
                        }
                        return setq9( false )
                    }} id="Answer9" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q9 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details9" type="text" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>

            <div className="row mb-2 data10 card shadow card-body">
                <div className="col-md-12 mb-4">
                    <label htmlFor=""> Are you a person with disability?</label>
                    <input id="Question10" value="Are you a person with disability?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq10( true )
                        }
                        return setq10( false )
                    }} id="Answer10" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q10 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details10" type="text" className=" form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>

            <div className="row mb-2 data11 card shadow card-body">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Are you a solo parent?</label>
                    <input id="Question11" value="Are you a solo parent?" type="hidden" />
                    <select onChange={( e ) => {
                        if ( e.target.value == 'Yes' ) {
                            return setq11( true )
                        }
                        return setq10( false )
                    }} id="Answer11" className="form-control">
                        <option value="0">No</option>
                        <option value="1"> Yes</option>
                    </select>
                    <div className="col-md-12 mb-2" style={{ display: q11 == false ? 'none' : '' }}>
                        <br />
                        <label htmlFor="">Give details</label>
                        <input id="Details11" type="text" className="form-control border-info bg-light" />
                        <h6 className="text-info mt-2">
                            <i className="fe fe-info mr-2"></i>
                            This field is required
                        </h6>
                    </div>
                </div>
            </div>

            <div className="mt-2 mb-4 d-flex aij jcc">
                <button onClick={() => {
                    Fire(
                        'Update Personal Data Sheet?',
                        ' I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
                        'info',
                        () => {

                            let data: any = {
                                questions: []
                            }
                            for ( let i = 0; i < 11; i++ ) {
                                let input = $( '.data' + i + ' input, ' + '.data' + i + ' select ' )
                                let object: any = {}
                                for ( let index in input ) {
                                    if ( input[ index ].id == undefined ) {
                                        break
                                    }
                                    if ( input[ index ].id !== "" ) {
                                        object[ input[ index ].id ] = $( '#' + input[ index ][ 'id' ] ).val()
                                    }
                                }
                                data[ 'questions' ].push( object )
                            }
                            data[ 'employee_id' ] = JSON.parse( userData ).id
                            let api = new Auth( 'questions' )
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
                }} className="btn btn-outline-primary">Update Answers</button>
            </div>
        </div>
    )
}
