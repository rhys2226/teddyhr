import React from 'react'
import Pagination from '../../../../components/Table/Pagination'
import LeavesPlaceholders from './Placeholders/LeavesPlaceholders'

export default function Leaves() {


    const [ add, setadd ] = React.useState( false )

    const [ leave, setleave ]: any = React.useState( [] )

    React.useEffect( () => {
        setTimeout( () => {
            setleave( [ 1, 2, 3, 4, 5, 6 ] )
        }, 1000 );
    }, [] )

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 card p-5">
                <h2 className="mb-3">Leaves</h2>
                <table className="table table-borderless table-striped ">
                    <thead className="table-success">
                        <tr role="row">
                            <th className="text-success">..</th>
                            <th className="text-success">Type</th>
                            <th className="text-success">Days</th>
                            <th className="text-success">With Pay</th>
                            <th className="text-success">From</th>
                            <th className="text-success">To</th>
                        </tr>
                    </thead>
                    <tbody>
                        <LeavesPlaceholders show={leave.length !== 0 ? false : true} />
                        {
                            leave.map( () => (
                                <tr>
                                    <th scope="col">
                                        <div className="circle circle-sm bg-light">
                                            <i className="fe fe-truck text-muted"></i>
                                        </div>
                                        <span className="dot dot-md bg-success mr-1"></span>
                                    </th>
                                    <td>Sick Leave</td>
                                    <td>5</td>
                                    <td><span className="text-success">Yes</span></td>
                                    <td>July 5, 2021</td>
                                    <td>July 10, 2021</td>
                                </tr>
                            ) )
                        }

                    </tbody>
                </table>
            </div >
        </div >
    )
}
