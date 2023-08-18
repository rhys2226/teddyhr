import React from 'react'
import {formatImageUrl, sentencify, toDate} from '../../../helpers'
import {useHistory} from 'react-router-dom'
import EducationalAttainments from './EducationalAttainments'
import Eligibilities from './Eligibilities'
import PersonalForms from './PersonalForms'
import SupportingDocuments from './SupportingDocuments'
import WorkExperience from './WorkExperience'

export default function MainOverview(props: any) {
    const employee: any = props.employee
    const history = useHistory()

    const user: any = localStorage.getItem('user')
    const id = JSON.parse(user).id

    return (
        <div>
            <div className="mt-5 align-items-center card">
                <div className="mt-5 text-center col-md-3">
                    <div className="avatar avatar-xl">
                        <img
                            style={{cursor: 'pointer'}}
                            src={formatImageUrl(employee.user.Avatar)}
                            alt="..."
                            className="avatar-img rounded-circle "
                        />
                    </div>
                </div>
                <div className="p-5 col w-100">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">
                                {' '}
                                {employee.user.Last} {employee.user.First}{' '}
                                {employee.user.Middle}
                            </h4>
                            <p className="mb-3 ">
                                <h1
                                    className="p-1 badge bg-primary-lighter text-primary br-2"
                                    style={{fontWeight: 900}}>
                                    {' '}
                                    {employee.Position}
                                </h1>
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 row">
                        <div className="col-md-7">
                            <p className="text-info"> {employee.Degrees} </p>
                            <p className="mb-0 small text-muted">
                                Previous Employer:{' '}
                                <span className="mb-0 small text-info">
                                    {employee.PreviousEmployer}
                                </span>{' '}
                            </p>
                            <p className="mb-0 small text-muted">
                                Employer's Contact Information:{' '}
                                <span className="mb-0 small text-info">
                                    {' '}
                                    {employee.EmployersContactInformation}{' '}
                                </span>
                            </p>
                            <p className="mb-0 small text-muted">
                                First Day:{' '}
                                <span className="mb-0 small text-info">
                                    {' '}
                                    {toDate(employee.created_at)}
                                </span>
                            </p>
                        </div>
                        <div className="col">
                            <p className="mb-0 small text-muted">
                                Email:
                                <span className="mb-0 small text-primary">
                                    {employee.user.Email}
                                </span>
                            </p>
                            <p className="mb-0 small text-muted">
                                Alignment:
                                <span className="mb-0 small text-success">
                                    {employee.Alignment}
                                </span>
                            </p>
                            <p className="mb-0 small text-muted">
                                Phone:
                                <span className="mb-0 small text-dark">
                                    {employee.user.Phone}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="m-0 mt-2 row d-flex">
                        <div>
                            {`${employee.supervisors.First} ${employee.supervisors.Middle} ${employee.supervisors.Last}`}
                            <br />
                            <span className="small text-muted">
                                Immediate Supervisor
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className="card-footer"
                    style={{display: id == props.id ? 'block' : 'none'}}>
                    <a
                        role="button"
                        onClick={() => {
                            history.push(
                                '/home/settings/profile/' + employee.user_id,
                            )
                        }}
                        className="d-flex justify-content-between text-muted">
                        <span>Account Settings</span>
                        <i className="fe fe-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div className="my-4 row">
                <WorkExperience
                    data={employee.work_experiences}
                    id={props.id}
                />
                <EducationalAttainments
                    data={employee.educational_attainments}
                    id={props.id}
                />
                <Eligibilities data={employee.eligibilities} id={props.id} />
                <PersonalForms id={props.id} />
                <SupportingDocuments data={[]} />
            </div>
        </div>
    )
}
