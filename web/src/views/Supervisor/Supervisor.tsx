import React from 'react'
import {Alert, Fire, noData} from '../../components/Alerts/Alert'
import LargeModal from '../../components/Modals/LargeModal'
import Pagination from '../../components/Table/Pagination'
import {Auth} from '../../services/auth.service'
import Subordinates from './Subordinates'
import SupervisorPlaceholder from './SupervisorPlaceholder'

export default function Supervisor() {
    const [add, setAdd] = React.useState(false)
    const [disabled, setdisabled] = React.useState(false)
    const [supervisors, setsupervisors]: any = React.useState([])
    const [employees, setEmployees]: any = React.useState([])
    const [filteredData, setFilteredData] = React.useState([])
    const [fetched, setfetched]: any = React.useState(false)
    const [modal, setModal]: any = React.useState(<div></div>)
    const userData: any = localStorage.getItem('user')
    const type = JSON.parse(userData).Type

    React.useEffect(() => {
        getSupervisors()
        getEmplyees()
    }, [])

    function getEmplyees() {
        const api = new Auth('employees')
        api.fetch({}).then((data: any) => {
            setEmployees(data)
        })
    }

    function getSupervisors() {
        const api = new Auth('subordinates')
        api.fetch({}).then((data: any) => {
            setsupervisors(data)
            setFilteredData(data)
            setfetched(true)
        })
    }

    const search = (e: any) => {
        const keyword = e.target.value
        keyword === ''
            ? setFilteredData(supervisors)
            : setFilteredData(
                  supervisors.filter(
                      (data: any) =>
                          data.supervisors.Email.toLowerCase().includes(
                              keyword,
                          ) ||
                          data.supervisors.Phone.toLowerCase().includes(
                              keyword,
                          ) ||
                          data.supervisors.First.toLowerCase().includes(
                              keyword,
                          ) ||
                          data.supervisors.Middle.toLowerCase().includes(
                              keyword,
                          ) ||
                          data.supervisors.Last.toLowerCase().includes(
                              keyword,
                          ) ||
                          data.Department.toLowerCase().includes(keyword),
                  ),
              )
    }

    const renderData = () => {
        noData()
        if (supervisors.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={4}>
                        Nothing department supervisors yet...
                    </td>
                </tr>
            )
        }
    }

    const addToDepartment = () => {
        Fire(
            'Add Subordinate',
            'Are you sure you want to add this on the selected department?',
            'warning',
            () => {
                setdisabled(true)
                $('input').removeClass('is-invalid').removeClass('is-valid')
                const data: any = {
                    Department: $('#Department').val(),
                    SupervisorID: $('#SupervisorID').val(),
                    SubordinateID: $('#SubordinateID').val(),
                }
                for (let key in data) {
                    if (data[key] === '') {
                        $(`#${key}`).addClass('is-invalid')
                        setdisabled(false)
                    }
                }

                const api = new Auth('subordinates')

                api.create(data, {})
                    .then(() => {
                        getSupervisors()
                        for (let key in data) {
                            $(`#${key}`).val('')
                            $(`#${key}`)
                                .removeClass('is-invalid')
                                .removeClass('is-valid')
                        }
                        setAdd(add === false ? true : false)
                        setdisabled(false)
                        Alert(
                            'Hooray!',
                            `New Employee has been designated to ${data.Department}`,
                            'success',
                        )
                    })
                    .catch(() => {
                        Alert('Error', 'Somethin Went wrong', 'info')
                        setdisabled(false)
                    })
            },
        )
    }

    return (
        <div>
            <div className="my-4 col-md-12">
                <h2 className="mb-1 ">Supervisors</h2>
                <p className="mb-3 text-muted">
                    Displaying List of Supervisors and their subordinates
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
                                <div className="col-auto form-group">
                                    <button
                                        onClick={() => {
                                            setAdd(add === false ? true : false)
                                        }}
                                        className="btn btn-outline-primary"
                                        style={{
                                            display:
                                                type === 'Admin'
                                                    ? 'flex'
                                                    : 'none',
                                        }}>
                                        <i className="fe fe-plus"></i>
                                        &nbsp;{' '}
                                        {add === false
                                            ? 'New Subordinate'
                                            : 'Cancel'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-secondary">
                                        <i className="fe fe-pause"></i> &nbsp;
                                        Department
                                    </th>
                                    <th className="text-primary">Supervisor</th>
                                    <th className="text-info"></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <SupervisorPlaceholder show={!fetched} />
                                {renderData()}
                                <tr
                                    style={{
                                        display:
                                            add === true ? 'table-row' : 'none',
                                    }}>
                                    <td>
                                        <input
                                            id="Department"
                                            className="form-control"
                                        />
                                    </td>
                                    <td></td>
                                    <td>
                                        <select
                                            id="SupervisorID"
                                            className="form-control">
                                            <option selected disabled></option>
                                            {employees.map(
                                                (employee: any, index: any) => (
                                                    <option
                                                        key={index}
                                                        value={
                                                            employee.user_id
                                                        }>{`${employee.user.First} ${employee.user.Middle} ${employee.user.Last}`}</option>
                                                ),
                                            )}
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            id="SubordinateID"
                                            className="form-control">
                                            <option selected disabled></option>
                                            {employees.map(
                                                (employee: any, index: any) => (
                                                    <option
                                                        key={index}
                                                        value={
                                                            employee.user_id
                                                        }>{`${employee.user.First} ${employee.user.Middle} ${employee.user.Last}`}</option>
                                                ),
                                            )}
                                        </select>
                                    </td>
                                    <td>
                                        <button
                                            onClick={addToDepartment}
                                            className="btn btn-dark"
                                            disabled={disabled}>
                                            {disabled == true ? (
                                                <div className="d-flex aic jcc">
                                                    <div
                                                        className="text-white spinner-border spinner-border-sm"
                                                        role="status"
                                                    />
                                                </div>
                                            ) : (
                                                'Submit'
                                            )}
                                        </button>
                                    </td>
                                </tr>

                                {filteredData.map(
                                    (supervisor: any, index: number) => (
                                        <tr key={index}>
                                            <td>
                                                {' '}
                                                <i className="fe fe-pause"></i>{' '}
                                                &nbsp; {supervisor.Department}
                                            </td>

                                            <td>
                                                {' '}
                                                {
                                                    supervisor.supervisors.First
                                                }{' '}
                                                {supervisor.supervisors.Middle}{' '}
                                                {supervisor.supervisors.Last}{' '}
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        setModal(
                                                            <Subordinates
                                                                data={
                                                                    supervisor
                                                                }
                                                            />,
                                                        )
                                                    }}
                                                    data-toggle="modal"
                                                    data-target=".large-modal"
                                                    className="btn btn-outline-info "
                                                    type="button">
                                                    View Subordinates
                                                </button>
                                            </td>
                                            <td></td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <LargeModal>{modal}</LargeModal>
        </div>
    )
}
