import React from 'react'
import { useParams } from 'react-router-dom'
import { Auth } from '../../../services/auth.service'
import ApplicantProfile from './ApplicantProfile'

export default function EmploymentStatus() {

    React.useEffect( () => {
        getApplicatns()
    }, [] )

    let { id }: any = useParams();

    const getApplicatns = () => {
        const api = new Auth( 'applicants' )
        api.fetchOne( id ).then( ( data ) => {
            setcomponent( <ApplicantProfile applicant={data} /> )
        } )
    }

    const [ component, setcomponent ]: any = React.useState( <div /> )

    return (
        <div>
            {component}
        </div>
    )
}
