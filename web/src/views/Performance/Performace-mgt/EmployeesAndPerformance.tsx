import React, {useState, useEffect} from 'react'
import {noData} from '../../../components/Alerts/Alert'
import Pagination from '../../../components/Table/Pagination'
import {Auth} from '../../../services/auth.service'
import EmployeeAndPerformancePlaceholders from '../Placeholders/EmployeeAndPerformancePlaceholders'
import {formatImageUrl} from '../../../helpers'

export default function EmployeesAndPerformance() {
    const [performance, setPerformance]: any = useState([])
    const [fetched, setfetched]: any = useState(false)

    useEffect(() => {
        getTopEmployees()
    }, [])

    function getTopEmployees() {
        const api = new Auth('employee-performances')
        api.fetch({}).then((data: any) => {
            setPerformance(data)
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

    const renderData = () => {
        noData()
        if (performance.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={8}>
                        No employee performaces yet...
                    </td>
                </tr>
            )
        }
    }

    return (
        <div className="my-4 col-md-6">
            <div className="p-3 t-bg-white">
                <div className="mb-1 t-font-bold">Employee Performance</div>
                <p className="mb-3 text-muted">
                    Displaying List of Employee's Performance in descending
                    order
                </p>
            </div>

            <div className="card t-border-none ">
                <div className="card-body">
                    <div className="toolbar"></div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th className="text-center ">
                                    <i className="fe fe-user"></i>
                                </th>
                                <th className="text-dark">Name</th>
                                <th className="text-warning">Average</th>
                                <th className="text-info">Month</th>
                                <th className="text-center text-danger">
                                    Lowest
                                </th>
                                <th className="text-center text-success">
                                    Highest
                                </th>

                                <th className="text-dark">Supervisor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EmployeeAndPerformancePlaceholders
                                show={!fetched}
                            />
                            {renderData()}
                            {performance.map((employee: any, index: any) => (
                                <tr key={index}>
                                    <td className="text-center">
                                        <img
                                            src={formatImageUrl(
                                                employee.user.Avatar,
                                            )}
                                            alt="..."
                                            className="avatar-img rounded-circle t-w-[50px] t-h-[50px]"
                                        />
                                    </td>

                                    <td>
                                        <p className="mb-0 text-muted">
                                            <strong>
                                                {employee.user.First +
                                                    ' ' +
                                                    employee.user.Middle +
                                                    ' ' +
                                                    employee.user.Last}
                                            </strong>
                                        </p>
                                        <p className="mb-3 small">
                                            <span
                                                className="p-1 text-white badge badge-success br-2"
                                                style={{fontWeight: 900}}>
                                                {' '}
                                                Developer
                                            </span>
                                        </p>
                                    </td>

                                    <td>
                                        <span className="mb-0">
                                            {employee.AveragePerformance}%
                                        </span>
                                        <div
                                            className="my-2 progress"
                                            style={{height: '4px'}}>
                                            <div
                                                className={`progress-bar progress-bar-striped ${setColor(
                                                    employee.AveragePerformance,
                                                )}`}
                                                role="progressbar"
                                                style={{
                                                    width:
                                                        employee.AveragePerformance +
                                                        '%',
                                                }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}></div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="mb-0">
                                            {employee.RatingThisMonth}%
                                        </span>
                                        <div
                                            className="my-2 progress"
                                            style={{height: '4px'}}>
                                            <div
                                                className={`progress-bar progress-bar-striped ${setColor(
                                                    employee.RatingThisMonth,
                                                )}`}
                                                role="progressbar"
                                                style={{
                                                    width:
                                                        employee.RatingThisMonth +
                                                        '%',
                                                }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}></div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="mb-0">
                                            {employee.LowestRating}%
                                        </span>
                                        <div
                                            className="my-2 progress"
                                            style={{height: '4px'}}>
                                            <div
                                                className={`progress-bar progress-bar-striped ${setColor(
                                                    employee.LowestRating,
                                                )}`}
                                                role="progressbar"
                                                style={{
                                                    width:
                                                        employee.LowestRating +
                                                        '%',
                                                }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}></div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="mb-0">
                                            {employee.HighestRating}%
                                        </span>
                                        <div
                                            className="my-2 progress"
                                            style={{height: '4px'}}>
                                            <div
                                                className={`progress-bar progress-bar-striped ${setColor(
                                                    employee.HighestRating,
                                                )}`}
                                                role="progressbar"
                                                style={{
                                                    width:
                                                        employee.HighestRating +
                                                        '%',
                                                }}
                                                aria-valuenow={10}
                                                aria-valuemin={0}
                                                aria-valuemax={100}></div>
                                        </div>
                                    </td>

                                    <td>
                                        <p className="mb-0 text-muted">
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
