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

            {component}
        </div>

    )
}
