import React from 'react'
import { sentencify, toDate } from '../../../helpers'
import { useHistory } from "react-router-dom";
import EducationalAttainments from './EducationalAttainments'
import Eligibilities from './Eligibilities'
import PersonalForms from './PersonalForms'
import SupportingDocuments from './SupportingDocuments'
import WorkExperience from './WorkExperience'

export default function MainOverview( props: any ) {
    const employee: any = props.employee
    const history = useHistory()

    const user: any = localStorage.getItem( 'user' )
    const id = JSON.parse( user ).id

    return (
        <div>
            <div className=" mt-5 align-items-center card">
                <div className="col-md-3 text-center mt-5">
                    <div className="avatar avatar-xl">
                        <img style={{ cursor: 'pointer' }} src={employee.user.Avatar} alt="..." className="avatar-img   rounded-circle " />
                    </div>
                </div>
                <div className="col  p-5 w-100">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">   {employee.user.Last} {employee.user.First} {employee.user.Middle}</h4>
                            <p className=" mb-3"><h1 className="badge bg-primary-lighter text-primary p-1 br-2" style={{ fontWeight: 900, }}> {employee.Position}</h1></p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-7">
                            <p className="text-info">  {employee.Degrees} </p>
                            <p className="small mb-0 text-muted">Previous Employer:  <span className="small mb-0 text-info">{employee.PreviousEmployer}</span> </p>
                            <p className="small mb-0 text-muted">Employer's Contact Information: <span className="small mb-0 text-info"> {employee.EmployersContactInformation} </span></p>
                            <p className="small mb-0 text-muted">First Day: <span className="small mb-0 text-info"> {toDate( employee.created_at )}</span></p>
                        </div>
                        <div className="col">
                            <p className="small mb-0 text-muted">Email:
                                <span className="small mb-0 text-primary">{employee.user.Email}</span>
                            </p>
                            <p className="small mb-0 text-muted">Alignment:
                                <span className="small mb-0 text-success">{employee.Alignment}</span>
                            </p>
                            <p className="small mb-0 text-muted">Phone:
                                <span className="small mb-0 text-dark">{employee.user.Phone}</span>
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex m-0 mt-2">
                        <div className="avatar avatar-md m-0 mr-2">
                            <img alt="..." className="avatar-img rounded-circle" src={employee.supervisors.Avatar} />
                        </div>
                        <div>
                            {
                                `${ employee.supervisors.First } ${ employee.supervisors.Middle } ${ employee.supervisors.Last }`
                            }
                            <br />
                            <span className="small text-muted">Immediate Supervisor</span>
                        </div>
                    </div>


                </div>
                <div className="card-footer" style={{ display: id == props.id ? "block" : 'none' }} >
                    <a role="button" onClick={() => {
                        history.push( '/home/settings/profile/' + employee.user_id )
                    }} className="d-flex justify-content-between text-muted"><span>Account Settings</span><i className="fe fe-chevron-right"></i></a>
                </div>
            </div>
            <div className="row my-4">
                <WorkExperience data={employee.work_experiences} id={props.id} />
                <EducationalAttainments data={employee.educational_attainments} id={props.id} />
                <Eligibilities data={employee.eligibilities} id={props.id} />
                <PersonalForms id={props.id} />
                <SupportingDocuments data={[]} />
            </div>
        </div>
    )
}
