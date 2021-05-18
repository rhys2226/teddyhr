import React from 'react'
import EducationalAttainments from '../../Settings/Overview/EducationalAttainments'
import Eligibilities from '../../Settings/Overview/Eligibilities'
import SupportingDocuments from '../../Settings/Overview/SupportingDocuments'
import WorkExperience from '../../Settings/Overview/WorkExperience'

export default function ApplicantINformation() {
    return (
        <div>
            <div className="row mt-5 align-items-center">
                <div className="col-md-3 text-center mb-5">
                    <div className="avatar avatar-xl">
                        <img style={{ cursor: 'pointer' }} src="http://localhost:3000//assets/avatars/face-7.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">Fuentevilla, Teddy Doe</h4>
                            <h3 className="text-muted  mt-0">Office of Management Information System</h3>
                            <h2 className=" mb-3"><span className="badge bg-dark-lighter text-dark p-1 br-2" style={{ fontWeight: 900, }}>Applied as Developer</span></h2>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-7">
                            <p className="text-muted"> Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology </p>
                        </div>
                        <div className="col">
                            <p className="small mb-0 text-muted">teddy@gmail.com</p>
                            <p className="small mb-0 text-success">Vertically Alligned</p>
                            <p className="small mb-0 text-muted">0928-624-1875</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 row">
                    <WorkExperience />
                </div>
                <div className="col-md-12 row" style={{ justifyContent: 'center' }}>
                    <div className="row align-items-center w-100 mb-4 shadow">
                        <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-bookmark fe-24 text-success"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="h5 mt-4 mb-1">Educational Attainments</h3>
                            </a>
                            <ul>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 row" style={{ justifyContent: 'center' }}>
                    <div className="row align-items-center w-100 mb-4 shadow">
                        <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-check-square fe-24 text-warning"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="h5 mt-4 mb-1">Eligibilities</h3>
                            </a>
                            <ul>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
