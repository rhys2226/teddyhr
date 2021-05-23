import React from 'react'
import { Alert, Fire } from '../../../../components/Alerts/Alert'

type Props = {
    show: Boolean
    hide: Function
}

export default function AddLeave( props: Props ) {
    return (
        <tr style={{ display: props.show == false ? 'none' : 'table-row' }} className="my-4 p-5 m-0 col-md-12 row">
            <th scope="col">
                <div className="circle circle-sm bg-light">
                    <i className="fe fe-tool text-muted"></i>
                </div>
                <span className="dot dot-md bg-success mr-1"></span>
            </th>
            <td>
                <select className="form-control">
                    <option>Vacation</option>
                    <option>Sick</option>
                    <option>Maternity</option>
                    <option>Special Privilege</option>
                    <option>Others, specify</option>
                </select>
            </td>
            <td>
                <input type="text" className="form-control" />
            </td>
            <td>
                <select className="form-control">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </td>
            <th>
                <button type="button"
                    onClick={() => {
                        Fire( 'Add Leave?', 'Are you sure you want to Add Leave?', 'info', () => {
                            Alert( 'Leave Added', '', 'success' )
                            props.hide()
                        } )
                    }}
                    className="btn btn-outline-primary">Submit</button>
            </th>
        </tr>
    )
}
