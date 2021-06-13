import React from 'react'

type Props = {
    data: any
}

export default function Competencies( props: Props ) {

    return (
        <tbody className={`Duties${ props.data }`}>
            <tr>
                <td><input id={`PercentageofWorkingTime1${ props.data }`} className="form-control" type="text" /></td>
                <td><input id={`DutiesAndResponsibilities1${ props.data }`} className="form-control" type="text" /></td>
                <td rowSpan={5} colSpan={2}><textarea id={`CompetencyLevel${ props.data }`} style={{ maxHeight: '100%' }} className="form-control"></textarea></td>
            </tr>
            <tr>
                <td><input id={`PercentageofWorkingTime2${ props.data }`} className="form-control" type="text" /></td>
                <td><input id={`DutiesAndResponsibilities2${ props.data }`} className="form-control" type="text" /></td>
            </tr>
        </tbody>
    )
}
