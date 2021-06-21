import React from 'react'
import { useParams } from 'react-router-dom';
import PDS from '../../../components/Doc/PDS/PDS'
import PDSForm from './Update/PDSForm'

export default function PDSSettings() {

    let { id }: any = useParams();
    const userData: any = localStorage.getItem( 'user' )
    const [ component, setComponent ] = React.useState( <PDS /> )

    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent( <PDS /> )
            return
        }
        setComponent( <PDSForm /> )
    }

    return (
        <div>
            <div className="row d-flex aic jcc">
                <div className="col-md-5">
                    <ul style={{ display: JSON.parse( userData ).Type === 'Employee' ? '' : 'none' }} className="nav nav-pills" id="pills-tab2" role="tablist">
                        <li className="nav-item">
                            <p onClick={() => changeTab( 1 )} className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                                <i className="fe fe-eye"></i>
                                <span>&nbsp; View</span>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p onClick={() => changeTab( 2 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                                <i className="fe fe-edit-3"></i>
                                <span>&nbsp; Update</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            {component}
        </div>
    )
}
