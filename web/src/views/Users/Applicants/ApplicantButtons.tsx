import React from 'react'
import {Application} from '../../../core/models/application.model'
import ApplicantINformation from './ApplicantINformation'
import ApplicantSupportingDocument from './ApplicantSupportingDocument'
import {ApplicationStatusEnum} from '../../../core/enum/application-status.enum'
import {Auth} from '../../../services/auth.service'

type Props = {
    reject: Function
    setUser: Function
    setModal: Function
    setModalData: Function
    application: Application
    getApplicants: Function
}

export const ApplicantButtons = (props: Props) => {
    const {
        application,
        setModalData,
        setModal,
        reject,
        setUser,
        getApplicants,
    } = props

    const userType = JSON.parse(localStorage.getItem('user') as string).Type

    const setStatus = async (applicationStatus: ApplicationStatusEnum) => {
        const api = new Auth('applicants')

        await api.update(application.user_id, {
            isPending: applicationStatus,
        })

        getApplicants()
    }

    return (
        <React.Fragment>
            <button
                style={{
                    display: userType === 'Admin' ? '' : 'none',
                }}
                data-toggle="dropdown"
                className="t-mr-3">
                <i className="bi bi-three-dots"></i>
            </button>

            <div className="dropdown-menu dropdown-menu-right">
                <button
                    data-toggle="modal"
                    data-target=".large-modal"
                    onClick={async () => {
                        await setModalData(application)
                        setModal(<ApplicantINformation data={application} />)
                    }}
                    className="dropdown-item t-py-2">
                    View Information
                </button>

                <button
                    data-toggle="modal"
                    data-target=".large-modal"
                    onClick={async () => {
                        await setModalData(application)
                        setModal(
                            <ApplicantSupportingDocument
                                data={application.attachments}
                            />,
                        )
                    }}
                    className="dropdown-item t-py-2">
                    Check Supporting Documents
                </button>

                <button
                    onClick={async () => await reject(application)}
                    className="dropdown-item t-py-2">
                    Reject
                </button>

                <button
                    onClick={() => setUser(application)}
                    data-toggle="modal"
                    data-target=".slide-modal"
                    className="dropdown-item t-py-2">
                    Schedule an Interview
                </button>

                <br />
                <hr />
                <br />

                {Object.values(ApplicationStatusEnum).map(
                    (applicationStatus, index) => (
                        <button
                            key={index}
                            onClick={async () =>
                                await setStatus(applicationStatus)
                            }
                            className="dropdown-item t-py-2">
                            Set as {applicationStatus}
                        </button>
                    ),
                )}
            </div>
        </React.Fragment>
    )
}
