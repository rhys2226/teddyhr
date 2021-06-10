import React from 'react'

type Props = {
    supervisor: any
    employees: any
};

export default function ChangeSupervisor( props: Props ) {
    return (
        <div>
            <div className="form-group">
                <label className="text-muted">Supervisor</label>
                <td className="text-primary">{props.supervisor.First} {props.supervisor.Last} {props.supervisor.Middle}</td>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="">New Supervisor</label>
                <select id="supervisor" className="form-control">
                    {
                        props.employees.map( ( employee: any, index: any ) => (
                            <option value={employee.user.id} key={index}>
                                {employee.user.First} {employee.user.Middle} {employee.user.Last}
                            </option>
                        ) )
                    }
                </select>
            </div>
        </div>
    )
}
