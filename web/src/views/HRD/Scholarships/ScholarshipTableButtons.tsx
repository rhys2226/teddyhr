import React from 'react'
import {ScholarShip} from '../../../core/models/scholarship.model'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import {Auth} from '../../../services/auth.service'
import ApplicantSupportingDocument from '../../Users/Applicants/ApplicantSupportingDocument'
import {ScholarShipAvailabilityEnum} from '../../../core/enum/scholarship-availability.enum'

type Props = {
    scholarship: ScholarShip
    getScholarships: Function
    setmodal: Function
}

export default function ScholarshipTableButtons(props: Props) {
    const {scholarship, getScholarships, setmodal} = props

    const userType = JSON.parse(localStorage.getItem('user') as string).Type

    const removeScholarship = () => {
        Fire(
            'Delete Scholarship',
            'Are you sure you want to delete this scholarship?',
            'info',
            () => {
                const api = new Auth('scholarships')
                api.delete(scholarship.id)
                    .then(() => {
                        Alert(
                            'Scholarship Removed',
                            'Scholarship has been successfully Removed',
                            'success',
                        )
                        getScholarships()
                    })
                    .catch(() => {
                        Alert(
                            'Error',
                            'Something went wrong Try Again',
                            'error',
                        )
                    })
            },
        )
    }

    const viewDocument = () => {
        setmodal(<ApplicantSupportingDocument data={scholarship.attachments} />)
    }

    const setStatus = async (status: ScholarShipAvailabilityEnum) => {
        const api = new Auth('scholarships')
        await api.update(scholarship.id, {
            isAvailable: status,
        })

        getScholarships()
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
                {Object.values(ScholarShipAvailabilityEnum).map(
                    (status, index) => (
                        <button
                            key={index}
                            onClick={async () => await setStatus(status)}
                            className="dropdown-item t-py-2">
                            Set as {status}
                        </button>
                    ),
                )}

                <br />
                <hr />
                <br />

                {scholarship.attachments.length !== 0 && (
                    <button
                        data-toggle="modal"
                        data-target=".large-modal"
                        onClick={() => viewDocument()}
                        className="dropdown-item t-py-2">
                        View Documents
                    </button>
                )}

                <button
                    onClick={() => removeScholarship()}
                    className="dropdown-item t-py-2">
                    Remove Scholarship
                </button>
            </div>
        </React.Fragment>
    )
}
