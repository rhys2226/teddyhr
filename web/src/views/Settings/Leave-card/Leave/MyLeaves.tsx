import React from 'react'
import {useParams} from 'react-router-dom'
import {Alert, Fire, noData} from '../../../../components/Alerts/Alert'
import FullScreenModal from '../../../../components/Modals/FullScreenModal'
import {Auth} from '../../../../services/auth.service'
import ApplicationForLeaveSheet from './CSCForm/ApplicationForLeaveSheet'
import LeavesPlaceholders from './Placeholders/LeavesPlaceholders'
import {formatImageUrl} from '../../../../helpers'
import {LeaveStatusEnum} from '../../../../core/enum/leave-status.enum'

export default function MyLeaves() {
    const [modal, setModal] = React.useState(<div></div>)
    const [leaves, setleaves]: any = React.useState([])
    const [filteredData, setFilteredData]: any = React.useState([])
    const [fetched, setfetched]: any = React.useState(false)
    let {id}: any = useParams()
    const userType = JSON.parse(localStorage.getItem('user') as string).Type

    React.useEffect(() => {
        getLeaves()
    }, [])

    function getLeaves() {
        const api = new Auth('application-for-leave')
        api.fetchOne(id).then((data) => {
            setleaves(data)
            setFilteredData(data)
            setfetched(true)
        })
    }

    const search = (e: any) => {
        const keyword = e.target.value
        keyword === ''
            ? setFilteredData(leaves)
            : setFilteredData(
                  leaves.filter(
                      (data: any) =>
                          data.user.Email.toLowerCase().includes(keyword) ||
                          data.user.Phone.toLowerCase().includes(keyword) ||
                          data.user.First.toLowerCase().includes(keyword) ||
                          data.user.Middle.toLowerCase().includes(keyword) ||
                          data.user.Last.toLowerCase().includes(keyword),
                  ),
              )
    }

    const renderData = () => {
        noData()
        if (leaves.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={7}>
                        No leave applications yet...
                    </td>
                </tr>
            )
        }
    }

    const viewLeaveDetails = (leave: any) => {
        const id = leave.employee_id
        const api = new Auth('leave-card')
        api.fetchOne(id).then((data) => {
            setModal(
                <ApplicationForLeaveSheet
                    data={leave}
                    leaves={data[data.length - 1]}
                />,
            )
        })
    }

    const removeLeave = (leave: any) => {
        Fire(
            'Remove Leave Application?',
            'Are you sure you want to remove this leave application?',
            'warning',
            () => {
                const api = new Auth('application-for-leave')
                api.delete(leave.id)
                    .then((data) => {
                        Alert(
                            'Application Removed',
                            'Leave application has been romved',
                            'success',
                        )
                        getLeaves()
                    })
                    .catch(() => {
                        Alert(
                            'Error!',
                            'Something went wrong. Try again',
                            'error',
                        )
                    })
            },
        )
    }

    const setStatus = async (leave: any, status: LeaveStatusEnum) => {
        const api = new Auth('application-for-leave')

        await api.update(leave.id, {
            status: status,
        })
    }

    return (
        <div>
            <div className="my-4 col-md-12">
                <h2 className="mb-1 ">Leaves</h2>
                <p className="mb-3 text-muted">
                    Displaying List of Leaves in descending order
                </p>
                <div className="shadow card">
                    <div className="card-body">
                        <div className="toolbar">
                            <div className="form-row">
                                <div className="col-auto form-group">
                                    <label className="sr-only">Search</label>
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
                        <table className="table ">
                            <thead>
                                <tr role="row">
                                    <th className="text-success">
                                        <i className="fe fe-user"></i>
                                    </th>
                                    <th className="text-success">Name</th>
                                    <th className="text-success">Status</th>
                                    <th className="text-success">Type</th>
                                    <th className="text-success">When</th>
                                    <th className="text-success">Days</th>
                                    <th className="text-success">With Pay</th>
                                    <th className="text-success">
                                        Commutation
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <LeavesPlaceholders show={!fetched} />
                                {renderData()}
                                {filteredData.map(
                                    (leave: any, index: number) => (
                                        <tr key={index}>
                                            <td>
                                                <div>
                                                    <img
                                                        src={formatImageUrl(
                                                            leave.user.Avatar,
                                                        )}
                                                        alt="..."
                                                        className="t-object-fill t-w-[50px] t-rounded-full t-h-[50px]"
                                                    />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted">
                                                    <strong>
                                                        {leave.user.Last}{' '}
                                                        {leave.user.First}{' '}
                                                        {leave.user.Middle}
                                                    </strong>
                                                </p>
                                                <p className="mb-3 small">
                                                    <span
                                                        className="p-1 text-white badge badge-success br-2"
                                                        style={{
                                                            fontWeight: 900,
                                                        }}>
                                                        {
                                                            leave.employee
                                                                .Position
                                                        }
                                                    </span>
                                                </p>
                                            </td>

                                            <td>{leave.status}</td>

                                            <td>{leave.Spent}</td>
                                            <td>
                                                {new Date(
                                                    leave.from_date,
                                                ).toLocaleDateString()}{' '}
                                                {'-'}
                                                {new Date(
                                                    leave.to_date,
                                                ).toLocaleDateString()}{' '}
                                            </td>

                                            <td>{leave.Days}</td>
                                            <td>
                                                <span className="text-success">
                                                    Yes
                                                </span>
                                            </td>
                                            <td>{leave.Comutation}</td>
                                            <td>
                                                <button
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
                                                        onClick={() =>
                                                            viewLeaveDetails(
                                                                leave,
                                                            )
                                                        }
                                                        data-toggle="modal"
                                                        data-target=".modal-full"
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        View Leave Details
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            removeLeave(leave)
                                                        }
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        Remove Application
                                                    </button>

                                                    <div
                                                        className={`${
                                                            userType === 'Admin'
                                                                ? ''
                                                                : 't-hidden'
                                                        }`}>
                                                        <br />
                                                        <hr />
                                                        <br />

                                                        {Object.values(
                                                            LeaveStatusEnum,
                                                        ).map(
                                                            (
                                                                applicationStatus,
                                                                index,
                                                            ) => (
                                                                <button
                                                                    key={index}
                                                                    onClick={async () =>
                                                                        await setStatus(
                                                                            leave,
                                                                            applicationStatus,
                                                                        )
                                                                    }
                                                                    className="dropdown-item t-py-2">
                                                                    Set as{' '}
                                                                    {
                                                                        applicationStatus
                                                                    }
                                                                </button>
                                                            ),
                                                        )}
                                                    </div>
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
            <FullScreenModal>{modal}</FullScreenModal>
        </div>
    )
}
