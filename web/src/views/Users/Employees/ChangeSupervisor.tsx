import React from 'react'

type Props = {};

export default function ChangeSupervisor( props: Props ) {
    return (
        <div>
            <div className="form-group">
                <label className="text-muted">Supervisor</label>
                <td className="text-primary">Ryan Agsaluna</td>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="">New Supervisor</label>
                <select className="form-control">
                    <option selected disabled>Choose..</option>
                </select>
            </div>
        </div>
    )
}
