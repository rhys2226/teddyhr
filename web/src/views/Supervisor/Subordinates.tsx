import React from 'react'
import { Alert, Fire } from '../../components/Alerts/Alert';
import SubordinatesPlaceholder from './SubordinatesPlaceholder';

export default function Subordinates( props: any ) {

    const [ applicants, setApplicants ]: any = React.useState( [] )

    React.useEffect( () => {
        setTimeout( () => {
            setApplicants( [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ] )
        }, 2000 );
    }, [] )

    return (
        <div className="pt-2">
            <h2 className="pt-2 text-center">Subordinates</h2>
            <br />
            <div className="card card-body">
                <SubordinatesPlaceholder show={applicants.length !== 0 ? false : true} />
                {
                    applicants.map( ( applicants: any, index: any ) => (
                        <div className="p-3 w-100 d-flex shadow" style={{ alignItems: 'center' }}>
                            <div className="avatar avatar-lg mr-5 ">
                                <img src="http://localhost:3000/assets/avatars/face-7.jpg" alt="..." className="avatar-img rounded-circle" />
                            </div>
                            <div className="w-100">
                                <h4 className="m-0 mt-3">Jamel Eid Yassin</h4>
                                <p className=" mb-3"><span className="badge badge-info p-1 br-2" style={{ fontWeight: 900, }}> Developer</span></p>
                            </div>
                            <div style={{ alignSelf: 'flex-end' }}>
                                <button
                                    onClick={() => {
                                        Fire( 'Remove Subordinate', 'Are you sure you want to Remove Subordinate?', 'warning', () => {
                                            Alert( 'Subordinate Removed', '', 'info' )
                                        } )
                                    }} className="btn btn-danger btn-sm">Remove </button>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}
