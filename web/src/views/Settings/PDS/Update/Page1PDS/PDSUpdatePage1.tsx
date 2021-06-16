import React from 'react'
import { Auth } from '../../../../../services/auth.service'
import PDSEducBG from './PDSEducBG'
import PDSFamilyBG from './PDSFamilyBG'
import PDSPersonalBg from './PDSPersonalBg'
import * as interfaces from '../../../../../components/Doc/PDS/PDSInterface'

export default function PDSUpdatePage1( props: any ) {

    const [ data, setData ]: any = React.useState<interfaces.PDS>()
    const userData: any = localStorage.getItem( 'user' )

    React.useEffect( () => {
        getPDS()
    }, [] )

    function getPDS() {
        const api = new Auth( 'pds' )
        api.fetchOne( JSON.parse( userData ).id )
            .then( ( data ) => {
                setData( data )
                setComponent(
                    <PDSPersonalBg
                        PesonsalInformation={data.personal_information}
                        Resedential={data.residential_address}
                        Permanent={data.permanent_address}
                    />
                )
            } )
    }


    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent(
                <PDSPersonalBg
                    PesonsalInformation={data.personal_information}
                    Resedential={data.residential_address}
                    Permanent={data.permanent_address}
                />
            )
            return
        }
        if ( tab === 2 ) {
            setComponent(
                <PDSFamilyBG
                    FamilyBackground={data.family_background}
                    Children={data.children}
                />
            )
            return
        }
        setComponent(
            <PDSEducBG
            />
        )
    }

    const [ component, setComponent ]: any = React.useState(
        <div className="spinner-border mr-3" role="status">
            <span className="sr-only">Loading...</span>
        </div> )


    return (
        <div>
            <ul className="nav nav-pills  mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <p onClick={() => changeTab( 1 )} className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fe fe-user"></i>
                        <span>&nbsp;Personal Background</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 2 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-users"></i>
                        <span>&nbsp;Family Background</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 3 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-edit-2"></i>
                        <span>&nbsp;Educational Background</span>
                    </p>
                </li>
            </ul>
            {component}
        </div>
    )
}
