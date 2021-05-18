import React, { useState } from 'react';
import LoginNav from '../../headers/LoginNav';
import Login from '../../views/Main/Login';
import ApplicationForm from '../Forms/ApplicationForms/ApplicationForm';
import FullScreenModal from '../Modals/FullScreenModal';
import Descriptions from '../../views/Main/Vacancies/Descriptions';
import Vacancies from './Vacancies';

export default function LandingUI() {
    const styles = {
        headline: {
            fontWeight: 900,
            fontSize: '4rem'
        },

    };

    let array = [ 1, 2, 2, 3, 3, 4, 1, 2, 2, 3, 3, 4, ];

    const [ modal, setModal ] = React.useState( <div></div> )

    return (
        <div>
            <LoginNav modal={() => {
                setModal( <Login /> )
            }} />
            <div className='wrapper bg-light'>
                <div style={{ height: '100vh', width: '99vw', background: 'rgba(0,0,0,0.5)', position: 'absolute', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', zIndex: 2, top: '20vh', width: '100%' }}>
                    <h1 className='text-center p-5 text-white h1' style={styles.headline}>
                        Get hired and work for
					<br />
					IloIlo State College of Fisheries
				    </h1>
                    <div className="w-100 text-center">
                        <button
                            onClick={() => {
                                setModal( <ApplicationForm /> )
                            }}
                            data-toggle="modal" data-target=".modal-full"
                            className="btn btn-danger ml-4" >
                            <h1 className="text-white pt-2 pl-5 pr-5 h3">Apply Now</h1>
                        </button>
                        <button
                            onClick={() => {
                                setModal( <Login /> )
                            }}
                            data-toggle="modal" data-target=".modal-full"
                            className="btn btn-light ml-4" >
                            <h1 className="pt-2 pl-5 pr-5 h3">Login as Applicant</h1>
                        </button>
                    </div>
                </div>
                <img style={{ height: '100vh', width: '99vw' }} src="http://localhost:3000/bg/1.jpg" />
                <h2 className='text-center bg-info p-5 text-white mt-0' style={styles.headline}>
                    Available Vacancies
                </h2>
                <br />
                <br />
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        {array.map( () => (
                            <Vacancies modal={( modal: any ) => {
                                setModal( modal == 'descriptions' ? <Descriptions /> : <ApplicationForm /> )
                            }} />
                        ) )}
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>

            <FullScreenModal>
                {modal}
            </FullScreenModal>
        </div>
    );
}
