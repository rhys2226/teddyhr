import React from 'react'
import {Alert, Fire, noData} from '../../../components/Alerts/Alert'
import {toDate} from '../../../helpers'
import {Auth} from '../../../services/auth.service'
import LargeModal from './../../../components/Modals/LargeModal'
import ApplicantSupportingDocument from '../../Users/Applicants/ApplicantSupportingDocument'
import SeminarsAttendedPlaceholder from './SeminarsAttendedPlaceholder'
import {SeminarStatusEnum} from '../../../core/enum/seminar-status.enum'
import {Seminar} from '../../../core/models/seminar.model'

export default function NewSeminarsAttended() {
    const [modal, setModal] = React.useState(<div></div>)
    const [dateFilter, setdateFilter] = React.useState('')
    const [years, setYears] = React.useState([])
    const userData: any = localStorage.getItem('user')
    const type = JSON.parse(userData).Type
    const [fetched, setFetched]: any = React.useState(false)

    React.useEffect(() => {
        loopYears()
    }, [])

    const loopYears = () => {
        let yearArray: any = []
        for (let i = 2023; i < 2025; i++) {
            yearArray.push(i)
        }
        setYears(yearArray)
    }

    React.useEffect(() => {}, [dateFilter])

    const [seminars, setSeminars]: any = React.useState([])

    React.useEffect(() => {
        getSeminars()
    }, [])

    async function getSeminars() {
        const api = new Auth('seminars')

        const data = await api.fetch()
        noData()
        setSeminars(data)
        setFetched(true)
    }

    const setStatus = async (seminar: Seminar, status: SeminarStatusEnum) => {
        const api = new Auth('seminars')
        await api.update(seminar.id, {
            status: status,
        })

        getSeminars()
    }

    const removeSeminar = async (seminar: any) => {
        {
            Fire(
                'Delete Seminar',
                'Are you sure you want to delete this seminar?',
                'info',
                async () => {
                    const api = new Auth('seminars')
                    await api.delete(seminar.id)

                    Alert(
                        'Seminar Removed',
                        'Seminar has been successfully Removed',
                        'success',
                    )

                    getSeminars()
                },
            )
        }
    }

    const DropDownMenu = (data: any) => {
        const {seminar} = data

        return (
            <React.Fragment>
                <button data-toggle="dropdown" className="t-mr-3">
                    <i className="bi bi-three-dots"></i>
                </button>

                <div className="dropdown-menu dropdown-menu-right t-relative t-z-20 t-bg-white">
                    <button
                        data-toggle="modal"
                        data-target=".large-modal"
                        onClick={() => {
                            setModal(
                                <ApplicantSupportingDocument
                                    data={seminar.attachments}
                                />,
                            )
                        }}
                        className={`dropdown-item t-py-2 ${
                            seminar.attachments?.length === 0 ? 't-hidden' : ''
                        }`}>
                        View Attachments
                    </button>

                    <button
                        className="dropdown-item t-py-2"
                        onClick={() => removeSeminar(seminar)}
                        style={{display: type === 'Admin' ? '' : 'none'}}>
                        Remove Seminar
                    </button>

                    <br />
                    <hr />
                    <br />

                    {Object.values(SeminarStatusEnum).map(
                        (applicationStatus, index) => (
                            <button
                                key={index}
                                onClick={async () =>
                                    await setStatus(seminar, applicationStatus)
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

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="mb-4 col-md-12">
                    <div className="card timeline">
                        <div className="card-header d-flex">
                            <strong className="card-title">Seminars </strong>
                            <div className="ml-auto ">
                                <button
                                    className="btn btn-dark"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Select Year
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    {years.map((year, index) => (
                                        <button
                                            role="butoon"
                                            className="dropdown-item">
                                            {year}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card-body row">
                            <SeminarsAttendedPlaceholder show={!fetched} />
                            {seminars
                                .reverse()
                                .map((seminar: any, index: any) => (
                                    <>
                                        <div
                                            key={index}
                                            className="pb-3 timeline-item item-danger col-md-12 card-body">
                                            <div className="pl-5 w-100">
                                                <div className="d-flex w-100 row">
                                                    <div className="col-md-1 d-flex aic jcc">
                                                        <div className="avatar avatar-lg">
                                                            <i className="fe fe-32 fe-airplay t-text-blue-500"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <strong>
                                                            {seminar.Title}{' '}
                                                        </strong>
                                                        <br />
                                                        <small>
                                                            Conducting Agency:
                                                            {
                                                                seminar.Agency
                                                            }{' '}
                                                        </small>
                                                        <br />

                                                        <small>
                                                            Status:
                                                            <span
                                                                className={`badge t-text-white t-ml-3 t-text-xs ${
                                                                    seminar.status ===
                                                                    null
                                                                        ? 't-bg-red-500'
                                                                        : seminar.status ===
                                                                          SeminarStatusEnum.Scheduled
                                                                        ? 't-bg-blue-500'
                                                                        : seminar.status ===
                                                                          SeminarStatusEnum.Upcoming
                                                                        ? 't-bg-purple-500'
                                                                        : seminar.status ===
                                                                          SeminarStatusEnum.Ongoing
                                                                        ? 't-bg-amber-500'
                                                                        : seminar.status ===
                                                                              SeminarStatusEnum.Cancelled ||
                                                                          seminar.status ===
                                                                              SeminarStatusEnum.Postponed ||
                                                                          seminar.status ===
                                                                              SeminarStatusEnum.Completed
                                                                        ? 't-bg-emerald-500'
                                                                        : seminar.status ===
                                                                          SeminarStatusEnum.Ended
                                                                        ? 't-bg-teal-500'
                                                                        : 't-bg-gray-500'
                                                                }`}>
                                                                {seminar.status ===
                                                                null
                                                                    ? 'Pending'
                                                                    : seminar.status}
                                                            </span>
                                                        </small>

                                                        <br />
                                                        <small>
                                                            Venue:{' '}
                                                            {seminar.Venue}{' '}
                                                        </small>
                                                        <br />
                                                    </div>

                                                    <div className="text-right col-md-4">
                                                        <span>
                                                            From:{' '}
                                                            <small className="text-danger">
                                                                {toDate(
                                                                    seminar.From,
                                                                )}
                                                            </small>
                                                        </span>

                                                        <br />

                                                        <span>
                                                            To:{' '}
                                                            <small className="text-danger">
                                                                {toDate(
                                                                    seminar.To,
                                                                )}
                                                            </small>
                                                        </span>

                                                        <br />

                                                        <span className="badge badge-danger">
                                                            {seminar.Type}
                                                        </span>
                                                    </div>

                                                    <div className="col-md-1">
                                                        <DropDownMenu
                                                            seminar={seminar}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <LargeModal>{modal}</LargeModal>
        </div>
    )
}
