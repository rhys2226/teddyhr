import React from 'react'
import EducationalAttainments from './EducationalAttainments'
import Eligibilities from './Eligibilities'
import PersonalForms from './PersonalForms'
import SupportingDocuments from './SupportingDocuments'
import WorkExperience from './WorkExperience'
import { useHistory } from "react-router-dom";


export default function Overview() {
    const history = useHistory()
    return (
        <div>
            <div className=" mt-5 align-items-center card">
                <div className="col-md-3 text-center mt-5">
                    <div className="avatar avatar-xl">
                        <img style={{ cursor: 'pointer' }} src="http://localhost:3000/assets/avatars/face-7.jpg" alt="..." className="avatar-img   rounded-circle " />
                    </div>
                </div>
                <div className="col  p-5 w-100">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">Fuentevilla, Teddy Doe</h4>
                            <p className="small mb-3"><span className="badge bg-primary-lighter text-primary p-1 br-2" style={{ fontWeight: 900, }}>Developer</span></p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-7">
                            <p className="text-info"> Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology </p>
                            <p className="small mb-0 text-muted">Previous Employer: John Doe</p>
                            <p className="small mb-0 text-muted">Employer's Contact Information:09286241875</p>
                        </div>
                        <div className="col">
                            <p className="small mb-0 text-muted">teddy@gmail.com</p>
                            <p className="small mb-0 text-muted">Vertically Alligned</p>
                            <p className="small mb-0 text-muted">0928-624-1875</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a role="button" onClick={() => {
                        history.push( '/home/settings/profile' )
                    }} className="d-flex justify-content-between text-muted"><span>Account Settings</span><i className="fe fe-chevron-right"></i></a>
                </div>
            </div>
            <div className="row my-4">

                {/* <WorkExperience /> */}
                <EducationalAttainments />
                <Eligibilities />
                <PersonalForms />
                {/* <SupportingDocuments /> */}
            </div>
        </div>
    )
}
