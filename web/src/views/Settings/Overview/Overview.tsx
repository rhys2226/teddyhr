import React from 'react'

import { Auth } from '../../../services/auth.service'
import {
    useParams
} from "react-router-dom";
import PlaceHolderOverview from './PlaceHolderOverview'
import MainOverview from './MainOverview'


export default function Overview() {

    const [ component, setcomponent ]: any = React.useState( <PlaceHolderOverview /> )

    let { id }: any = useParams();

    React.useEffect( () => {
        getEmployee()
    }, [ id ] )

    function getEmployee() {
        const api = new Auth( 'employees/' + id )
        api.fetch()
            .then( ( data ) => {
                if ( data !== null ) {
                    setcomponent( <MainOverview employee={data} id={id} /> )
                }
            } )
    }

    return (
        <div>
            {component}
        </div>
    )
}
