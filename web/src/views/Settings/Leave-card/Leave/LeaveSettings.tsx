import React from 'react'
import { Alert, Fire } from '../../../../components/Alerts/Alert'
import SlideModal from '../../../../components/Modals/SlideModal'
import AddLeave from './AddLeave'
import LeaveEditForm from './LeaveEditForm'
import LeavesPlaceholders from './Placeholders/LeavesPlaceholders'

export default function LeaveSettings() {

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
                <h2 className="mb-3">Leave Settings</h2>
                <table className="table table-borderless table-striped ">
                    <thead className="table-success">
                        <tr role="row">
                            <th className="text-success"></th>
                            <th className="text-success">Type</th>
                            <th className="text-success">Next Credit days</th>
                            <th className="text-success">With Pay</th>
                            <th>
                                <button onClick={() => {
                                    setadd( add == true ? false : true )
                                }} className="btn btn-success d-flex">
                                    <i className="fe fe-plus"></i>
                                    {add !== false ? 'Cancel' : 'Add Leave'}
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <AddLeave
                            show={add}
                            hide={() => {
                                setadd( false )
                            }}
                        />

                        <LeavesPlaceholders show={leave.length !== 0 ? false : true} />
                        {
                            leave.map( () => (
                                <tr>
                                    <th scope="col">
                                        <div className="circle circle-sm bg-light">
                                            <i className="fe fe-tool text-muted"></i>
                                        </div>
                                        <span className="dot dot-md bg-success mr-1"></span>
                                    </th>
                                    <td>Sick Leave</td>
                                    <td>30 days</td>
                                    <td><span className="text-success">Yes</span></td>
                                    <td>
                                        <button className="btn fe fe-24 fe-chevron-down" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="text-muted sr-only">Action</span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">

                                            <button
                                                data-toggle='modal'
                                                data-target=".slide-modal"
                                                role="butoon" className="dropdown-item" >Edit</button>

                                            <button
                                                onClick={() => {
                                                    Fire( 'Remove Leave?', 'Are you sure you want to Remove Leave?', 'info', () => {
                                                        Alert( 'Leave Removed', '', 'success' )
                                                    } )
                                                }}
                                                role="butoon" className="dropdown-item" >Remove</button>
                                        </div>
                                    </td>
                                </tr>
                            ) )
                        }
                    </tbody>
                </table>
            </div>
            <SlideModal
                title="Edit Sick Leave"
                buttonName="Change"
                callback={() => {
                    Fire( 'Update Sick Leave?', 'Are you sure you want to Update Sick Leave?', 'info', () => {
                        Alert( 'Sick Leave Updated ', '', 'success' )
                    } )
                }}>
                <LeaveEditForm />
            </SlideModal>
        </div>
    )
}
