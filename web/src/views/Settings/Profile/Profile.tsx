import React from 'react'
import { useParams } from 'react-router-dom';
import { noData } from '../../../components/Alerts/Alert'
import { Auth } from '../../../services/auth.service'
import ProfileSettings from './ProfileSettings'

export default function Profile() {

    let { id }: any = useParams();

    React.useEffect( () => {
        getProfile()
    }, [] )

    const getProfile = () => {
        const api = new Auth( 'employees/' + id )
        api.fetch()
            .then( ( data ) => {
                noData()
                if ( data !== null ) {
                    setcomponent(
                        <ProfileSettings
                            employee={data}
                            reload={() => {
                                getProfile()
                            }}
                        />
                    )
                }
            } )
    }

    const preloader = () => (
        <div className="d-flex aic jcc">
            <div className="spinner-border mr-3 text-info " role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )

    const [ component, setcomponent ] = React.useState( preloader() )


    return (
        <div>
            {component}
        </div>
    )
}
