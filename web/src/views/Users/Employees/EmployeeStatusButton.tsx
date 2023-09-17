import React from 'react'
import {EmploymentStatusEnum} from '../../../core/enum/employment-status.enum'
import {Auth} from '../../../services/auth.service'

type Props = {
    employee: any
    getEmployees: Function
}

export default function EmployeeStatusButton(props: Props) {
    const {employee, getEmployees} = props

    const userType = JSON.parse(localStorage.getItem('user') as string).Type

    const setStatus = async (status: EmploymentStatusEnum) => {
        const api = new Auth('employees')

        await api.update(employee.user_id, {
            status: status,
        })

        getEmployees()
    }

    return (
        <React.Fragment>
            <br />
            <hr />
            <br />

            {Object.values(EmploymentStatusEnum).map((status, index) => (
                <button
                    key={index}
                    style={{
                        display: userType === 'Admin' ? '' : 'none',
                    }}
                    onClick={async () => await setStatus(status)}
                    className="dropdown-item t-py-2">
                    Set to {status}
                </button>
            ))}
        </React.Fragment>
    )
}
