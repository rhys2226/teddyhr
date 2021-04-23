import React, { useState } from 'react';
import LoginNav from '../../headers/login-nav';
import Login from '../../views/Login';
import ApplicationForm from '../Forms/ApplicationForms/ApplicationForm';
import FullScreenModal from '../Modals/FullScreenModal';
import Descriptions from '../Vacancies/Descriptions';
import Vacancies from './Vacancies';

export default function LandingUI() {
    const styles = {
        headline: {
            fontSize: '2rem',
            fontWeight: 400,
        },
    };

    let array = [ 1, 2, 2, 3, 3, 4, 5, 56, 6, 7, 123, 12, 321 ];

    const [ modal, setModal ] = React.useState( <div></div> )

    return (
        <div>
            <LoginNav modal={() => {
                setModal( <Login /> )
            }} />
            <div className='wrapper '>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className='text-center p-3' style={styles.headline}>
                    Welcome to ISCOF professional community!
					<br />
					Get hired and work for
					<br />
					IloIlo State College of Fisheries
				</h1>
                <hr />
                <br />
                <h2 className='text-center'>
                    <strong>Available Vacancies </strong>
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
            </div>
            <FullScreenModal>
                {modal}
            </FullScreenModal>
        </div>
    );
}
