import React from 'react'
import { Auth } from '../../../../services/auth.service'
import { LeaveTypes } from './LeaveTypes'

export default function LeaveBalances() {

    const userData: any = localStorage.getItem( 'user' )
    const id = JSON.parse( userData ).id

    const [ leaves, setleaves ] = React.useState( {
        BalanceVacation: 0,
        BalanceLeave: 0,
    } )

    React.useEffect( () => {
        getLeaveCard()
    }, [] )

    const getLeaveCard = () => {
        const api = new Auth( 'leave-card' )
        api.fetchOne( id ).then( ( data ) => {
            setleaves( data[ data.length - 1 ] )
        } )
    }


    return (
        <div>
            <div className="col-md-12 my-4 card">
                <div className="card-header">
                    <h2 className="h5 mb-1 ">Your accummulated leave balances</h2>
                </div>
                <div className="card card-body ">

                    <div className="row pt-5">

                        <p className="col-md-4 text-center" >Vacation Leave
                            <span>
                                <h1 className="text-success mb-5">{leaves.BalanceVacation}</h1>
                            </span>
                        </p>

                        <p className="col-md-4 text-center" >Sick Leave
                            <span>
                                <h1 className="text-warning mb-5">{leaves.BalanceLeave}</h1>
                            </span>
                        </p>

                        <p className="col-md-4 text-center" >Total Leaves
                            <span>
                                <h1 className="text-info mb-5">{leaves.BalanceVacation + leaves.BalanceLeave}</h1>
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
