import React from 'react'
import LeaveCardTable from './LeaveCardTable'
import '../Doc.css'
import { Auth } from '../../../services/auth.service'
import { useParams } from 'react-router-dom';

export default function LeaveCard() {

    let { id }: any = useParams();
    const [ fetched, setfetched ] = React.useState( false )

    React.useEffect( () => {
        getLeaveCard()
    }, [] )

    const getLeaveCard = () => {
        const api = new Auth( 'leave-card' )
        api.fetchOne( id ).then( ( data ) => {
            setcomponent( <LeaveCardTable data={data} /> )
            setfetched( true )
        } )
    }

    const [ component, setcomponent ] = React.useState( <div></div> )

    return (
        <div style={{ display: !fetched ? 'none' : '' }}>
            <div className="d-flex aic jcc " style={{ flexDirection: 'column' }}>
                <button className="btn btn-primary mb-3">
                    <i className=" fe fe-download"></i>
                    <span>&nbsp;Download Leave Card</span>
                </button>
                <div className="bg-white card-body shadow docs service-record">
                    <p className="text-center m-0">Republic of the Philippines</p>
                    <p className="text-center m-0 bold text-primary">ILOILO STATE COLLEGE OF FISHERIES    </p>
                    <p className="text-center m-0"> MAIN POBLACION CAMPUS</p>
                    <p className="text-center m-0">Poblacion, Barotac Nuevo, Iloilo</p>
                    <br />
                    <p className="text-center m-0">EMPLOYEE LEAVE CARD</p>
                    <br />
                    <div className="row">
                        <div className="col-md-5 row">
                            <div className="col-md-2">  Name: </div>
                            <div className="col-md-10">
                                <p className="underlined text-left">Ryan Agsaluna</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 row">
                            <div className="col-md-4">
                                Date of Birth:
                            </div>
                            <div className="col-md-8">
                                <p className="underlined text-left">11/14/2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 row">
                            <div className="col-md-2">
                                Position:
                            </div>
                            <div className="col-md-10">
                                <p className="underlined text-left">MIS Director</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 row">
                            <div className="col-md-4">
                                First day of Service:
                            </div>
                            <div className="col-md-8">
                                <p className="underlined text-left">11/14/2021</p>
                            </div>
                        </div>
                    </div>
                    {component}
                </div>
            </div>
        </div>
    )
}
