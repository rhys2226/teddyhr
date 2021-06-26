import React from 'react'
import { useForm } from 'react-hook-form';
import { Auth } from '../../../services/auth.service';
import { Alert, Fire } from '../../Alerts/Alert';

type LeaveCard = {
    id: any
    Year: any
    Month: any
    Particulars1: any
    Particulars2: any
    VacationEarned: any
    SickEarned: any
    ServiceCreditEarned: any
    WithPayVacation: any
    WithPayLeave: any
    WithPayServiceCredit: any
    BalanceVacation: any
    BalanceLeave: any
    BalanceServiceCredit: any
    WithoutPayVacation: any
    WithoutPayLeave: any
    DateAndActionTaken1: any
    DateAndActionTaken2: any
}

export default function LeaveModal( props: {
    leave: LeaveCard,
    refresh: Function
} ) {

    const { register, handleSubmit, setValue } = useForm<LeaveCard>();

    const [ disabled, setdisabled ] = React.useState( false )

    React.useEffect( () => {
        setValue( 'Year', props.leave.Year )
        setValue( 'Month', props.leave.Month )
        setValue( 'Particulars1', props.leave.Particulars1 )
        setValue( 'Particulars2', props.leave.Particulars2 )
        setValue( 'VacationEarned', props.leave.VacationEarned )
        setValue( 'SickEarned', props.leave.SickEarned )
        setValue( 'ServiceCreditEarned', props.leave.ServiceCreditEarned )
        setValue( 'WithPayVacation', props.leave.WithPayVacation )
        setValue( 'WithPayLeave', props.leave.WithPayLeave )
        setValue( 'WithPayServiceCredit', props.leave.WithPayServiceCredit )
        setValue( 'BalanceVacation', props.leave.BalanceVacation )
        setValue( 'BalanceLeave', props.leave.BalanceLeave )
        setValue( 'BalanceServiceCredit', props.leave.BalanceServiceCredit )
        setValue( 'WithoutPayVacation', props.leave.WithoutPayVacation )
        setValue( 'WithoutPayLeave', props.leave.WithoutPayLeave )
        setValue( 'DateAndActionTaken1', props.leave.DateAndActionTaken1 )
        setValue( 'DateAndActionTaken2', props.leave.DateAndActionTaken2 )
    }, [] )

    const submit = async ( data: LeaveCard ) => {

        Fire(
            'Are you sure you want to modify this row?',
            'Modifying row will not affect rows at the bottom if you wish to update, you need it to update manually',
            'info',
            () => {
                const api = new Auth( 'leave-card' )
                api.update( props.leave.id, data )
                    .then( () => {
                        Alert( 'Row Succesfully Updated', 'Note: The next leave credit that will be auto generate will always use the last row values', 'success' )
                        props.refresh()
                    } ).catch( () => {
                        Alert( 'Error', 'Something went wrong', 'error' )
                    } )
            }
        )
    }


    return (
        <div className="card">
            <form onSubmit={handleSubmit( submit )}>
                <div className="card-body">
                    <div className="row">

                        <div className="col-md-12 mb-4 text-info">Period</div>

                        <div className="col-md-6 mb-4">
                            <label htmlFor="">Year</label>
                            <input  {...register( 'Year' )} type="text" className="form-control" disabled />
                        </div>

                        <div className="col-md-6 mb-4">
                            <label htmlFor="">Month</label>
                            <input  {...register( 'Month' )} type="text" className="form-control" disabled />
                        </div>

                        <div className="col-md-12 mb-4">
                            <label htmlFor="">Particulars</label>
                            <input  {...register( 'Particulars1' )} type="text" className="form-control" />
                        </div>

                        <div className="col-md-12 mb-4 text-info">Vacation Leave</div>

                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Earned</label>
                            <input  {...register( 'VacationEarned' )} type="text" className="form-control" disabled />
                        </div>

                        <div className="col-md-3 mb-4">
                            <label htmlFor=""> With Pay</label>
                            <input onInput={( e: any ) => {
                                setValue( 'BalanceVacation', props.leave.BalanceVacation - e.target.value )
                            }}   {...register( 'WithPayVacation' )} type="text" className="form-control" />
                        </div>

                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Balance</label>
                            <input  {...register( 'BalanceVacation' )} type="text" disabled className="form-control" />
                        </div>

                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Without Pay</label>
                            <input  {...register( 'WithoutPayVacation' )} type="text" className="form-control" />
                        </div>

                        <div className="col-md-12 mb-4 text-info">Sick Leave</div>

                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Earned</label>
                            <input  {...register( 'SickEarned' )} type="text" className="form-control" disabled />
                        </div>

                        <div className="col-md-3 mb-4">
                            <label htmlFor=""> With Pay</label>
                            <input onInput={( e: any ) => {
                                setValue( 'BalanceLeave', props.leave.BalanceVacation - e.target.value )
                            }} {...register( 'WithPayLeave' )} type="text" className="form-control" />
                        </div>

                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Balance</label>
                            <input  {...register( 'BalanceLeave' )} type="text" className="form-control" disabled />
                        </div>

                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Without Pay</label>
                            <input  {...register( 'WithoutPayLeave' )} type="text" className="form-control" />
                        </div>


                        <div className="col-md-12 mb-4">
                            <label htmlFor="">Date and Action Taken  on Application for Leave</label>
                            <input  {...register( 'DateAndActionTaken1' )} type="text" className="form-control" />
                        </div>

                        <div className="col-md-12 mb-4">
                            <label htmlFor="">Particulars</label>
                            <input  {...register( 'Particulars2' )} type="text" className="form-control" />
                        </div>

                        <div className="col-md-12 mb-4 text-info">Service Record</div>

                        <div className="col-md-4 mb-4">
                            <label htmlFor="">Earned</label>
                            <input  {...register( 'ServiceCreditEarned' )} type="text" className="form-control" />
                        </div>


                        <div className="col-md-4 mb-4">
                            <label htmlFor="">	Absence Undertime W/o Pay</label>
                            <input onInput={( e: any ) => {
                                setValue( 'BalanceServiceCredit', props.leave.ServiceCreditEarned - e.target.value )
                            }}{...register( 'WithPayServiceCredit' )} type="text" className="form-control" />
                        </div>


                        <div className="col-md-4 mb-4">
                            <label htmlFor="">Balance</label>
                            <input   {...register( 'BalanceServiceCredit' )} type="text" className="form-control" />
                        </div>

                        <div className="col-md-12 mb-4">
                            <label htmlFor="">Date and Action Taken  on Application for Leave</label>
                            <input  {...register( 'DateAndActionTaken2' )} type="text" className="form-control" />
                        </div>

                        <div className="col-md-12 mb-4 d-flex aic jcc">
                            <button
                                disabled={disabled}
                                className="btn btn-dark">   {
                                    disabled == true ?

                                        <div className="d-flex aic jcc">
                                            <div className="spinner-border spinner-border-sm  text-white" role="status" />
                                        </div>
                                        :
                                        'Modify this row'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


