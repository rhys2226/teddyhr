import React from 'react'

export default function ListOfAwards() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="col-md-12 mb-4">
                    <div className="card timeline">
                        <div className="card-header">
                            <strong className="card-title">Awards</strong>
                        </div>
                        <div className="card-body">
                            <div className="pb-3 timeline-item item-success">
                                <div className="pl-5">
                                    <div className="mb-3 row">
                                        <div className="col-2">
                                            <div className="avatar avatar-xl mb-3 mx-4">
                                                <img src="http://localhost:3000//assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="col md-12">
                                            <strong className="fe-32 text-success">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
