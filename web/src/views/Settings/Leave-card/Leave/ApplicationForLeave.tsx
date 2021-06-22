import React from 'react'
import { Alert, Fire } from '../../../../components/Alerts/Alert'
import { hide } from '../../../../constants/constant-helper'
import { useForm } from 'react-hook-form';
import { Auth } from '../../../../services/auth.service';

type Inputs = {
    employee_id: any
    Office: any
    Spent: any
    SpecialPrivilege: any
    VacationDetails: any
    SpecialPrivilegeVacation: any
    IncaseofSickLeave: any
    IncaseofVacationLeave: any
    SpecifyLocationinAbroad: any
    SpecifyHospital: any
    Days: any
    Comutation: any
    From: any
    To: any
    Approved: any
    Vacation: any
    Specify: any
}

export default function ApplicationForLeave() {

    const [ spend, setSpend ] = React.useState( '' )
    const [ vacation, setvacation ] = React.useState( '' )
    const [ location, setlocation ] = React.useState( '' )
    const [ hospital, sethospital ] = React.useState( '' )
    const [ disabled, setdisabled ] = React.useState( false )
    const { register, handleSubmit } = useForm<Inputs>();

    const submit = async ( data: Inputs ) => {
        Fire(
            'Submit Leave Application?',
            'This will be subject for approval from the administrative officer and other related personnels',
            'info',
            () => {
                setdisabled( true )

                const api = new Auth( 'application-for-leave' )
                api.create( data ).then( () => {
                    Alert( 'Application for Leave Submitted', 'Your Leave application has been successfully submitted', 'success' )
                    setdisabled( false )
                } )
                    .catch( () => {
                        Alert( 'Error', 'Something went wrong. Try Again', 'error' )
                        setdisabled( false )
                    } )
            }
        )
    }
    return (
        <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-8'>
                <form onSubmit={handleSubmit( submit )}>
                    <div className='card shadow mb-4'>
                        <div className='card-header'>
                            <strong className='card-title'>Application for Leave Form</strong>
                        </div>
                        <div className='card-body'>
                            <h6 className="bold mt-2 mb-4 text-info">TYPE OF LEAVE</h6>
                            <div className="row mb-4">
                                <div className="col-md-3 mb-4">
                                    <label >SPENT</label>
                                    <select {...register( 'Spent' )} onChange={( e ) => {
                                        setSpend( e.target.value )
                                        setvacation( "" )
                                        setlocation( "" )
                                        sethospital( "" )
                                    }} className="form-control" >
                                        <option selected disabled value="">Choose..</option>
                                        <option>Vacation</option>
                                        <option>Sick</option>
                                        <option>Maternity</option>
                                        <option>Special Privilege</option>
                                        <option>Others, specify</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div style={hide( spend != 'Vacation' )} className="col-md-3 mb-4">
                                    <label >Vacation Details</label>
                                    <select {...register( 'Vacation' )} onChange={( e ) => {
                                        setvacation( e.target.value )
                                    }} className="form-control" >
                                        <option selected disabled value="">Choose..</option>
                                        <option>To seek employment</option>
                                        <option>Sick</option>
                                        <option>Maternity</option>
                                        <option>Special Privilege</option>
                                        <option>Others, specify</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div style={hide( vacation != 'Others, specify' )} className="col-md-6 mb-4">
                                    <label >Specify Vacation </label>
                                    <input {...register( 'VacationDetails' )} className="form-control" />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div style={hide( spend != 'Others, specify' )} className="col-md-9 mb-4">
                                    <label >Specify spent</label>
                                    <input  {...register( 'Specify' )} className="form-control" />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div style={hide( spend != 'Special Privilege' )} className="col-md-3 mb-4">
                                    <label >Special Privilege</label>
                                    <select {...register( 'SpecialPrivilege' )} className="form-control" >
                                        <option selected disabled value="">Choose..</option>
                                        <option>Birthday</option>
                                        <option>Enrollment</option>
                                        <option>Filial</option>
                                        <option>Government Transaction</option>
                                        <option>Special Privilege</option>
                                        <option>Graduation</option>
                                        <option>Hospitalization</option>
                                        <option>Mourning</option>
                                        <option>Relocation</option>
                                        <option>Wedding Anniversary</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div style={hide( vacation != 'Special Privilege' )} className="col-md-6 mb-4">
                                    <label >Special Privilege</label>
                                    <select {...register( 'SpecialPrivilegeVacation' )} className="form-control" >
                                        <option selected disabled value="">Choose..</option>
                                        <option>Birthday</option>
                                        <option>Enrollment</option>
                                        <option>Filial</option>
                                        <option>Government Transaction</option>
                                        <option>Special Privilege</option>
                                        <option>Graduation</option>
                                        <option>Hospitalization</option>
                                        <option>Mourning</option>
                                        <option>Relocation</option>
                                        <option>Wedding Anniversary</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                            </div>

                            <h6 style={hide( spend != 'Vacation' )} className="bold mt-2 mb-4 text-info">WHERE LEAVE WILL BE</h6>
                            <h6 style={hide( spend != 'Sick' )} className="bold mt-2 mb-4 text-info">WHERE LEAVE WILL BE</h6>
                            <div className="row mb-4">
                                <div style={hide( spend != 'Vacation' )} className="col-md-3 mb-4">
                                    <label >In case of Vacation Leave</label>
                                    <select {...register( 'IncaseofVacationLeave' )} onChange={( e ) => {
                                        setlocation( e.target.value )
                                    }} className="form-control" >
                                        <option selected disabled value="">Choose..</option>
                                        <option>Within the Philippines</option>
                                        <option>Specify Abroad</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div style={hide( location != 'Specify Abroad' )} className="col-md-9 mb-4">
                                    <label >Specify Location in Abroad</label>
                                    <input {...register( 'SpecifyLocationinAbroad' )} className="form-control" />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div style={hide( spend != 'Sick' )} className="col-md-3 mb-4">
                                    <label >In case of Sick Leave</label>
                                    <select {...register( 'IncaseofSickLeave' )} onChange={( e ) => {
                                        sethospital( e.target.value )
                                    }} className="form-control" >
                                        <option selected disabled value="">Choose..</option>
                                        <option>Out Patient</option>
                                        <option>Specify Hospital</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div style={hide( hospital != 'Specify Hospital' )} className="col-md-9 mb-4">
                                    <label >Specify Hospital </label>
                                    <input {...register( 'SpecifyHospital' )} className="form-control" />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="bold mt-2 mb-4 text-info">NUMBER OF DAYS APPLIED FOR</h6>
                                    <label >Days</label>
                                    <input {...register( 'Days' )} placeholder="0" className="form-control" />
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="bold mt-2 mb-4 text-info">COMUTATION</h6>
                                    <label >Select Comutation</label>
                                    <select {...register( 'Comutation' )} className="form-control" >
                                        <option selected disabled value="">Choose..</option>
                                        <option>Requested</option>
                                        <option>Not Requested</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                                </div>
                            </div>

                            <div className="mt-5 mb-4 d-flex aij jcc">
                                <button disabled={disabled} className="btn btn-dark float-right">
                                    {
                                        disabled == true ?

                                            <div className="d-flex aic jcc">
                                                <div className="spinner-border spinner-border-sm" role="status" />
                                            </div>
                                            :
                                            'Submit Leave Application'
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
