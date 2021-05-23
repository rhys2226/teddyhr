import React from 'react'
import { Alert, Fire } from '../../components/Alerts/Alert';
import AwardListPlaceholder from './AwardListPlaceholder';

export default function ListOfAwards() {

    const [ awards, setawards ]: any = React.useState( [] )

    React.useEffect( () => {
        setTimeout( () => {
            setawards( [ 1, 2, 3, 4, 5, 6, 7, 8, 10 ] )
        }, 1000 );
    }, [] )


    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="col-md-12 mb-4">
                    <div className="card timeline">
                        <div className="card-header">
                            <strong className="card-title">Awards</strong>
                        </div>
                        <div className="card-body row">
                            <AwardListPlaceholder show={awards.length !== 0 ? false : true} />

                            {
                                awards.map( () => (
                                    <div className="pb-3 timeline-item item-success col-md-12">
                                        <div className="pl-5">
                                            <div className="mb-3 row">
                                                <div className="col-auto md-12">
                                                    <strong className=" text-success">
                                                        Teddy Fuentivilla
                                            </strong>
                                                    <br />
                                                    <span className="badge badge-danger mr-5"> Oustanding Employee of 2021 </span>
                                                    <small >
                                                        04/21/2020 08:48PM
                                            </small>
                                                    <br />
                                                    <br />

                                                    <span className="text-muted small ">
                                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                        </span>
                                                </div>
                                                <div className="col-md-12 mt-3 ml-5 pl-5">
                                                    <ul className="avatars-list mb-2">
                                                        <li className="row">
                                                            <a className="w-100 col-md-12">
                                                                <img style={{ height: '20vh' }} alt="..." src="http://localhost:3000/assets/products/p1.jpg" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button onClick={() => {
                                                    Fire( 'Remove Award?', 'Are you sure you want to Award Seminar?', 'info', () => {
                                                        Alert( 'Seminar Award', '', 'success' )
                                                    } )
                                                }} className="btn btn-sm btn-outline-danger mt-5 mb-5 ">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
