import React from 'react'
import SubordinatesPlaceholder from './SubordinatesPlaceholder';

export default function Subordinates( props: any ) {

    const [ applicants, setApplicants ]: any = React.useState( [] )

    React.useEffect( () => {
        setTimeout( () => {
            setApplicants( [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ] )
        }, 2000 );
    }, [] )

    return (
        <div>
            <SubordinatesPlaceholder show={applicants.length !== 0 ? false : true} />
            {
                applicants.map( ( applicants: any, index: any ) => (
                    <div className="p-3 w-100 d-flex shadow" style={{ alignItems: 'center' }}>
                        <div className="avatar avatar-md mr-5">
                            <img src="http://localhost:3000/assets/avatars/face-7.jpg" alt="..." className="avatar-img rounded-circle" />
                        </div>

                        <div>
                            <h4 className="m-0 mt-3">Jamel Eid Yassin</h4>
                            <p className=" mb-3"><span className="badge badge-dark p-1 br-2" style={{ fontWeight: 900, }}> Developer</span></p>
                        </div>
                    </div>
                ) )
            }
        </div>
    )
}
