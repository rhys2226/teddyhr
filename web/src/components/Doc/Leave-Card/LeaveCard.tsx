import React from 'react'
import LeaveCardTable from './LeaveCardTable'
import '../Doc.css'
import { Auth } from '../../../services/auth.service'
import { useParams } from 'react-router-dom';
import PrintableLeaveCardSheet from './PrintableLeaveCardSheet'
import PrintComponents from 'react-print-components'

export default function LeaveCard() {

    let { id }: any = useParams();
    const [ fetched, setfetched ] = React.useState( false )
    const [ edit, setedit ] = React.useState( false )
    const [ leaveCardData, setleaveCardData ] = React.useState( [] )
    const userData: any = localStorage.getItem( 'user' )
    const type = JSON.parse( userData ).Type

    React.useEffect( () => {
        getLeaveCard()
    }, [] )

    const getLeaveCard = () => {
        const api = new Auth( 'leave-card' )
        api.fetchOne( id ).then( ( data ) => {
            setcomponent( <PrintableLeaveCardSheet data={data} /> )
            setleaveCardData( data )
            setfetched( true )
        } )
    }

    const [ component, setcomponent ] = React.useState( <div></div> )

    return (
        <div style={{ display: !fetched ? 'none' : '' }}>
            <div style={{ transform: 'translate(-150px)', marginBottom: '-150px', display: type === 'Admin' ? '' : 'none' }}>
                <button
                    onClick={() => {
                        setedit( edit === true ? false : true )
                        setcomponent( edit !== true ? <LeaveCardTable refresh={() => {
                            getLeaveCard()
                            $( '.modal-backdrop' ).hide();
                        }} data={leaveCardData} /> : <PrintableLeaveCardSheet data={leaveCardData} /> )
                    }}
                    className="btn btn-outline-dark  d-flex">
                    <i className="fe fe-edit"></i>&nbsp;
                    {edit === true ? 'Cancel' : 'Modify'}
                </button>
            </div>

            {/* <PrintComponents
                trigger={
                    <button className="btn btn-dark mb-3 mt-5" style={{ transform: 'translate(-50px,66px)', marginBottom: '-50px' }}>
                        <i className=" fe fe-printer"></i>
                        <span>&nbsp;Print</span>
                    </button>
                }>
                {component}
            </PrintComponents> */}


            {component}

        </div>

    )
}
