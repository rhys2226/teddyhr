import React, {useState, useEffect} from 'react'
import {noData} from '../../../components/Alerts/Alert'
import Pagination from '../../../components/Table/Pagination'
import {Auth} from '../../../services/auth.service'
import TopEmployeePlaceholders from '../Placeholders/TopEmployeePlaceholders'
import {formatImageUrl} from '../../../helpers'
export default function TopEmployee() {
    const [topEmployees, settopEmployees]: any = useState([])
    const [filteredData, setFilteredData]: any = useState([])
    const [fetched, setfetched]: any = useState(false)

    useEffect(() => {
        getTopEmployees()
    }, [])

    function getTopEmployees() {
        const api = new Auth('top-employees')
        api.fetch({}).then((data) => {
            settopEmployees(data)
            setFilteredData(data)
            setfetched(true)
        })
    }

    function setColor(rating: number) {
        if (rating < 26) {
            return 'bg-danger'
        }
        if (rating < 51) {
            return 'bg-warning'
        }
        if (rating < 76) {
            return 'bg-success-lighter'
        }
        return 'bg-success'
    }

    const search = (e: any) => {
        const keyword = e.target.value
        keyword === ''
            ? setFilteredData(topEmployees)
            : setFilteredData(
                  topEmployees.filter(
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
        if (topEmployees.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={5}>
                        No top employee data yet...
                    </td>{' '}
                </tr>
            )
        }
    }

    return (
        <div className="my-4 col-md-6">
            <div className="p-3 t-bg-white">
                <div className="mb-1 t-font-bold">Employees of the month</div>
                <p className="mb-3 text-muted">
                    Displaying List of Top Employees this Month
                </p>
            </div>

            <div className="card t-border-none">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="text-center">
                                    <i className="fe fe-user"></i>
                                </th>
                                <th className="text-dark">Name</th>
                                <th className="text-success">
                                    Overall Rating{' '}
                                </th>
                                <th>Immediate Supervisor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TopEmployeePlaceholders show={!fetched} />
                            {renderData()}
                            {filteredData.map((employee: any, index: any) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="text-center">
                                        <img
                                            src={formatImageUrl(
                                                employee.user.Avatar,
                                            )}
                                            alt="..."
                                            className="t-w-[50px] t-h-[50px] rounded-circle"
                                        />
                                    </td>

                                    <td>
                                        <p className="mb-0 text-muted">
                                            {' '}
                                            <strong>
                                                {employee.user.Last}{' '}
                                                {employee.user.First}{' '}
                                                {employee.user.Middle}
                                            </strong>
                                        </p>
                                        <p className="mb-3 small">
                                            <span
                                                className={`badge text-white p-1 br-2 badge-success`}
                                                style={{fontWeight: 900}}>
                                                {employee.Position}
                                            </span>
                                        </p>
                                    </td>

                                    <td>
                                        <span className="mb-0">
                                            {employee.overAllRatings}%
                                        </span>
                                        <div
                                            className="my-2 progress"
                                            style={{height: '4px'}}>
                                            <div
                                                className={`progress-bar progress-bar-striped ${setColor(
                                                    employee.overAllRatings,
                                                )}`}
                                                role="progressbar"
                                                style={{
                                                    width:
                                                        employee.overAllRatings +
                                                        '%',
                                                }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}></div>
                                        </div>
                                    </td>

                                    <td>
                                        <p className="mb-0 text-muted">
                                            {' '}
                                            <strong>
                                                {employee.supervisors.First +
                                                    ' ' +
                                                    employee.supervisors
                                                        .Middle +
                                                    ' ' +
                                                    employee.supervisors.Last}
                                            </strong>
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
