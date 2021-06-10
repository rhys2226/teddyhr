import { useState, useEffect } from 'react'
import Pagination from '../../../components/Table/Pagination'
import { Alert, Fire } from '../../../components/Alerts/Alert';
import EmployeesPlaceholder from './EmployeesPlaceholder';
import SlideModal from '../../../components/Modals/SlideModal';
import ChangeSupervisor from './ChangeSupervisor';
import { useHistory } from "react-router-dom";
import LargeModal from '../../../components/Modals/LargeModal';
import EmployeeICPR from './EmployeeICPR';
import { Auth } from '../../../services/auth.service';
import { toDate } from '../../../helpers';


export default function Employees() {
    const history = useHistory()

    const [ currentSupervisor, setcurrentSupervisor ]: any = useState( {} )
    const [ currentEmployee, setcurrentEmployee ]: any = useState( {} )


    const [ employees, setEmployees ] = useState( [] )
    const user: any = localStorage.getItem( 'user' )
    const id = JSON.parse( user ).id

    useEffect( () => {
        getEmployees()
    }, [] )

    async function getEmployees() {
        const auth = new Auth( 'employees' );
        auth.fetch( {} ).then( ( data: any ) => {
            setEmployees( data.data )
        } )
    }

    const rateButton = () => (
        <button
            data-toggle='modal'
            data-target=".large-modal"
            onClick={() => {

            }}
            className="btn btn-sm btn-outline-info ml-2">Rate</button>
    )

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Employees</h2>
                <p className="mb-3 text-muted">Displaying List of Employees in descending order</p>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="toolbar">
                            <form className="form">
                                <div className="form-row">
                                    <div className="form-group col-auto">
                                        <label className="sr-only">Search</label>
                                        <input type="text" className="form-control" id="search1" value="" placeholder="Search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <table className="table table-borderless table-hover">
                            <thead className="table-info">
                                <tr>
                                    <th className="text-info"><i className="fe fe-user"></i></th>
                                    <th className="text-info">Name</th>
                                    <th className="text-info">Contact</th>
                                    <th className="text-info">Alignment</th>
                                    <th className="text-info text-center">Months of Services</th>
                                    <th className="text-info text-right">Hired Last</th>
                                    <th className="text-center text-dark"><i className="fe fe-user"></i></th>
                                    <th className="text-dark">Immediate Supervisor</th>
                                    <th className="text-info"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <EmployeesPlaceholder show={employees.length !== 0 ? false : true} />
                                {
                                    employees.map( ( employee: any, index: any ) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="avatar avatar-md">
                                                    <img src={employee.user.Avatar} alt="..." className="avatar-img rounded-circle" />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted">
                                                    <strong>
                                                        {employee.user.Last} {employee.user.First} {employee.user.Middle}
                                                    </strong>
                                                </p>
                                                <p className="small mb-3"><span className="badge badge-success text-white p-1 br-2" style={{ fontWeight: 900, }}>{employee.Position}</span></p>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-primary ">@{employee.user.Email}</p>
                                                <small className="mb-0 text-muted">{employee.user.Phone}</small>
                                            </td>

                                            <td>{employee.Alignment}</td>

                                            <td className=" text-center"> 15</td>

                                            <td className="text-muted text-right">{toDate( employee.created_at )}</td>


                                            <td className="text-center">
                                                <div className="avatar avatar-xl">
                                                    <img src={employee.supervisors.Avatar} alt="..." className="avatar-img rounded-circle" />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted">
                                                    <strong>
                                                        {employee.supervisors.id === id ? 'You' : employee.supervisors.First + ' ' + employee.supervisors.Middle + ' ' + employee.supervisors.Last}
                                                    </strong>
                                                </p>
                                            </td>

                                            <td>
                                                <button className="btn btn-sm btn-info dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted sr-only">Action</span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <button
                                                        onClick={() => {
                                                            setcurrentSupervisor( employee.supervisors )
                                                            setcurrentEmployee( employee )
                                                        }}
                                                        data-toggle='modal'
                                                        data-target=".slide-modal"
                                                        role="butoon" className="dropdown-item" >Add/Change Supervisor</button>

                                                    <button
                                                        onClick={() => {
                                                            history.push( `/home/settings/${ employee.user_id }` )
                                                        }}
                                                        role="butoon" className="dropdown-item"  >View Profile</button>
                                                    <button
                                                        onClick={() => {
                                                            Fire( 'Remove Employee?', `Are you sure you want to remove ${ employee.user.First } as an employee?`, 'info', () => {

                                                                const api = new Auth( 'employees' )

                                                                api.delete( employee.user.id )
                                                                    .then( () => {
                                                                        Alert( 'Employee has been removed', `${ employee.user.First } has been removed as an employee`, 'success' )
                                                                        getEmployees()
                                                                    } )
                                                                    .catch( () => {
                                                                        Alert( 'Error', `Something went wrong. Try again`, 'error' )
                                                                    } )
                                                            } )
                                                        }}
                                                        role="butoon" className="dropdown-item" >Remove as Employee</button>

                                                    <button
                                                        onClick={() => {
                                                            history.push( '/home/leaves' )
                                                        }}
                                                        role="butoon" className="dropdown-item" >Leave History</button>
                                                </div>
                                                {employee.supervisors.id === id ? rateButton() : ''}
                                            </td>
                                        </tr>
                                    ) )
                                }
                            </tbody>
                        </table>
                        <Pagination
                            Pages={() => {
                                let pages = []
                                for ( let index in employees ) {
                                    pages.push( parseInt( index ) + 1 )
                                }
                                return pages
                            }}
                            callback={( callback: Function ) => {
                                callback()
                            }}
                        />
                    </div>
                </div>
            </div>
            <SlideModal
                title="Change Supervisor"
                buttonName="Change"
                callback={() => {
                    let supervisor = $( '#supervisor' ).val()
                    Fire( 'Change Supervisor?', `Are you sure you want to change this employee's supervisor`, 'info', () => {
                        const api = new Auth( 'subordinates' )
                        api.update( currentEmployee.user_id, { SupervisorID: supervisor } )
                            .then( () => {
                                Alert( 'Supervisor Changed', 'Supervisor has been changed successfully', 'success' )
                                getEmployees()
                            } )
                            .catch( () => {
                                Alert( 'Error', 'Something went wrong. Try Again', 'error' )

                            } )
                    } )
                }}>
                <ChangeSupervisor supervisor={currentSupervisor} employees={employees} />
            </SlideModal>
            <LargeModal>
                <EmployeeICPR />
            </LargeModal>
        </div>
    )
}
