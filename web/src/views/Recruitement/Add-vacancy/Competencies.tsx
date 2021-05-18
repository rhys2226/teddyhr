import React from 'react'

type Props = {}

export default function Competencies( props: Props ) {

    return (
        <tbody>
            <tr>
                <td><input className="form-control" type="text" /></td>
                <td><input className="form-control" type="text" /></td>
                <td rowSpan={5} colSpan={2}><textarea style={{ maxHeight: '100%' }} className="form-control"></textarea></td>
            </tr>
            <tr>
                <td><input className="form-control" type="text" /></td>
                <td><input className="form-control" type="text" /></td>
            </tr>
        </tbody>
    )
}
