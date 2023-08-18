import {useState, useEffect} from 'react'
import {Alert, Fire, noData} from '../../../components/Alerts/Alert'
import LargeModal from '../../../components/Modals/LargeModal'
import SlideModal from '../../../components/Modals/SlideModal'
import ApplicantPlaceholders from './ApplicantPlaceholders'
import ApplicantINformation from './ApplicantINformation'
import ApplicantSupportingDocument from './ApplicantSupportingDocument'
import ScheduleAnInterview from './ScheduleAnInterview'
import {Auth} from '../../../services/auth.service'
import {formatImageUrl, toDate} from '../../../helpers'

export default function Applicants() {
    const [applicants, setApplicants]: any = useState([])
    const [modal, setModal]: any = useState()
    const [modalData, setModalData]: any = useState({})
    const [user, setUser]: any = useState({})
    const [filteredData, setFilteredData] = useState([])
    const [fetched, setFetched]: any = useState(false)
    const userData: any = localStorage.getItem('user')
    const type = JSON.parse(userData).Type

    useEffect(() => {
        getApplicants()
    }, [modalData])

    function getApplicants() {
        const auth = new Auth('applicants')
        auth.fetch({}).then((data: any) => {
            console.log('ari')
            setApplicants(data)
            setFilteredData(data)
            setFetched(true)
        })
    }

    const search = (e: any) => {
        const keyword = e.target.value
        keyword === ''
            ? setFilteredData(applicants)
            : setFilteredData(
                  applicants.filter(
                      (data: any) =>
                          data.user.Email.toLowerCase().includes(keyword) ||
                          data.user.Phone.toLowerCase().includes(keyword) ||
                          data.user.First.toLowerCase().includes(keyword) ||
                          data.user.Middle.toLowerCase().includes(keyword) ||
                          data.user.Last.toLowerCase().includes(keyword),
                  ),
              )
    }

    const NoDataComponent = () => {
        noData()
        if (applicants.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={9}>
                        Nothing has applied yet...
                    </td>
                </tr>
            )
        }
    }

    const reject = async (applicant: any) => {
        {
            const user = applicant
            Fire(
                `Reject  ${user.user.First}?`,
                `Are you sure you want to Reject the application of ${user.user.First}?`,
                'warning',
                () => {
                    const api = new Auth('applicants')
                    api.delete(user.user_id)
                        .then(() => {
                            Alert(
                                'Applicant Rejected',
                                `Rejected the application of  ${user.user.First} successful`,
                                'success',
                            )
                            getApplicants()
                        })
                        .catch(() =>
                            Alert(
                                'Something Went Wrong',
                                `Error on rejecting  ${user.user.First}. Please try again later`,
                                'error',
                            ),
                        )
                },
            )
        }
    }

    const scheduleAnInterview = () => {
        {
            const schedule = $('#scheduled_date').val()
            if (schedule === '') {
                Alert('Error!', 'Schedule Date should not be empty', 'error')
                return
            }
            Fire(
                `Interview ${user.user.First}`,
                `Are you sure you want to Schedule an Interview on ${
                    user.user.First
                } at ${toDate(schedule)}?`,
                'info',
                () => {
                    const api = new Auth('applicants')
                    api.update(user.user_id, {
                        Schedule: schedule,
                        on: toDate(schedule),
                    })
                        .then(() => {
                            Alert(
                                `Scheduled Interview: ${toDate(schedule)}`,
                                `Interview Schedule on ${toDate(
                                    schedule,
                                )}  has been successfully sent to ${
                                    user.user.First
                                }'s email`,
                                'success',
                            )
                        })
                        .catch(() =>
                            Alert(
                                'Something Went Wrong',
                                'Error Scheduling an Interview. Please try again later',
                                'eror',
                            ),
                        )
                },
            )
        }
    }

    return (
        <div>
            <div className="my-4 col-md-12">
                <h2 className="mb-1 "> Applicants</h2>
                <p className="mb-3 text-muted">
                    Displaying applicants in descending order
                </p>
                <div className="shadow card t-border-none">
                    <div className="card-body">
                        <div className="toolbar">
                            <div className="toolbar">
                                <div className="form-row">
                                    <div className="col-auto form-group">
                                        <label className="sr-only">
                                            Search
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                search(e)
                                            }}
                                            type="text"
                                            className="form-control"
                                            id="search1"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-center text-info">
                                        <i className="fe fe-user"></i>
                                    </th>
                                    <th className="text-info">Applicant</th>
                                    <th className="text-info">Prev Employer</th>
                                    <th className="text-info">Contact</th>
                                    <th className="text-info">Alignment</th>
                                    <th className="text-info">DSS Status</th>
                                    <th className="text-info">
                                        Application Date
                                    </th>
                                    <th className="text-info">Status</th>
                                    <th className="text-info">Schedule</th>
                                    <th className="text-info"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <ApplicantPlaceholders show={!fetched} />

                                {NoDataComponent()}

                                {filteredData.map(
                                    (applicant: any, index: any) => (
                                        <tr key={index}>
                                            <td className="text-center">
                                                <div className="avatar avatar-xl">
                                                    <img
                                                        src={formatImageUrl(
                                                            applicant.user
                                                                .Avatar,
                                                        )}
                                                        alt=""
                                                        className="avatar-img rounded-circle t-w-[50px] t-h-[50px] t-object-fill"
                                                    />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted">
                                                    <strong>
                                                        {`${applicant.user.Last} ${applicant.user.First} ${applicant.user.Middle}`}
                                                    </strong>
                                                </p>
                                                <p className="mb-3 small">
                                                    <span
                                                        className="p-1 badge badge-dark br-2"
                                                        style={{
                                                            fontWeight: 900,
                                                        }}>
                                                        as{' '}
                                                        {applicant.Position ||
                                                            'Developer'}
                                                    </span>
                                                </p>
                                            </td>

                                            <td>
                                                <p className="mb-0 ">
                                                    {applicant.PreviousEmployer}
                                                </p>
                                                <small className="mb-0 text-muted">
                                                    Employer Contact:{' '}
                                                    {
                                                        applicant.EmployersContactInformation
                                                    }
                                                </small>
                                            </td>

                                            <td>
                                                <p className="mb-0 ">
                                                    {applicant.user.Phone}
                                                </p>
                                                <small className="mb-0 text-muted">
                                                    {applicant.user.Email}
                                                </small>
                                            </td>

                                            <td>{applicant.Alignment}</td>

                                            <td>
                                                <span
                                                    className={
                                                        applicant.Alignment ===
                                                        'Vertical'
                                                            ? 'badge  text-white rounded p-2 br-2 badge-success'
                                                            : 'badge  text-white rounded p-2 br-2 badge-warning'
                                                    }
                                                    style={{fontWeight: 900}}>
                                                    {applicant.Alignment ===
                                                    'Vertical'
                                                        ? 'Qualified'
                                                        : 'Underqualified'}
                                                </span>
                                            </td>

                                            <td className="text-muted">
                                                {toDate(
                                                    applicant.user.created_at,
                                                )}
                                            </td>

                                            <td
                                                className={
                                                    applicant.Approved !==
                                                    'true'
                                                        ? 'text-danger'
                                                        : 'text-success'
                                                }>
                                                {applicant.Approved === 'true'
                                                    ? 'Approved'
                                                    : 'Pending'}
                                            </td>

                                            <td
                                                className={
                                                    applicant.Schedule !== null
                                                        ? 'text-success'
                                                        : 'text-danger'
                                                }>
                                                {applicant.Schedule === null
                                                    ? 'Not set'
                                                    : toDate(
                                                          applicant.Schedule,
                                                      )}
                                            </td>

                                            <td>
                                                <button
                                                    style={{
                                                        display:
                                                            type === 'Admin'
                                                                ? ''
                                                                : 'none',
                                                    }}
                                                    className="btn fe fe-24 fe-chevron-down"
                                                    type="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <span className="sr-only text-muted">
                                                        Action
                                                    </span>
                                                </button>

                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <button
                                                        data-toggle="modal"
                                                        data-target=".large-modal"
                                                        onClick={async () => {
                                                            await setModalData(
                                                                applicant,
                                                            )
                                                            setModal(
                                                                <ApplicantINformation
                                                                    data={
                                                                        applicant
                                                                    }
                                                                />,
                                                            )
                                                        }}
                                                        className="dropdown-item">
                                                        {' '}
                                                        View Information{' '}
                                                    </button>

                                                    <button
                                                        data-toggle="modal"
                                                        data-target=".large-modal"
                                                        onClick={async () => {
                                                            await setModalData(
                                                                applicant,
                                                            )
                                                            setModal(
                                                                <ApplicantSupportingDocument
                                                                    data={
                                                                        applicant.attachments
                                                                    }
                                                                />,
                                                            )
                                                        }}
                                                        className="dropdown-item">
                                                        {' '}
                                                        Check Supporting
                                                        Documents{' '}
                                                    </button>

                                                    <button
                                                        onClick={async () =>
                                                            await reject(
                                                                applicant,
                                                            )
                                                        }
                                                        className="dropdown-item">
                                                        Reject
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            setUser(applicant)
                                                        }
                                                        data-toggle="modal"
                                                        data-target=".slide-modal"
                                                        className="dropdown-item ">
                                                        Schedule an Interview
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <LargeModal>{modal}</LargeModal>

            <SlideModal
                title="Schedule an Interview"
                buttonName="Schedule Interview"
                callback={scheduleAnInterview}>
                <ScheduleAnInterview />
            </SlideModal>
        </div>
    )
}
