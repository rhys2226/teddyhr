import React from 'react'
import {Alert, Fire} from '../../../../components/Alerts/Alert'
import {hide} from '../../../../constants/constant-helper'
import {useForm} from 'react-hook-form'
import {Auth} from '../../../../services/auth.service'

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
    from_date: any
    to_date: any
}

export default function ApplicationForLeave() {
    const [spend, setSpend] = React.useState('')
    const [vacation, setvacation] = React.useState('')
    const [location, setlocation] = React.useState('')
    const [hospital, sethospital] = React.useState('')
    const [disabled, setdisabled] = React.useState(false)
    const {register, handleSubmit} = useForm<Inputs>()
    const userData: any = localStorage.getItem('user')

    const submit = async (data: Inputs) => {
        Fire(
            'Submit Leave Application?',
            'This will be subject for approval from the administrative officer and other related personnels',
            'info',
            () => {
                setdisabled(true)

                const api = new Auth('application-for-leave')
                api.create(data)
                    .then(() => {
                        Alert(
                            'Application for Leave Submitted',
                            'Your Leave application has been successfully submitted',
                            'success',
                        )
                        setdisabled(false)
                    })
                    .catch(() => {
                        Alert(
                            'Error',
                            'Something went wrong. Try Again',
                            'error',
                        )
                        setdisabled(false)
                    })
            },
        )
    }
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <form onSubmit={handleSubmit(submit)}>
                    <input
                        type="hidden"
                        {...register('employee_id')}
                        value={JSON.parse(userData).id}
                        className="form-control"
                    />
                    <div className="mb-4 shadow card">
                        <div className="card-header">
                            <strong className="card-title">
                                Application for Leave Form
                            </strong>
                        </div>
                        <div className="card-body">
                            <h6 className="mt-2 mb-4 bold text-info">
                                TYPE OF LEAVE
                            </h6>
                            <div className="mb-4 row">
                                <div className="mb-4 col-md-3">
                                    <label>SPENT</label>
                                    <select
                                        {...register('Spent')}
                                        onChange={(e) => {
                                            setSpend(e.target.value)
                                            setvacation('')
                                            setlocation('')
                                            sethospital('')
                                        }}
                                        className="form-control">
                                        <option selected disabled value="">
                                            Choose..
                                        </option>
                                        <option>Vacation</option>
                                        <option>Sick</option>
                                        <option>Maternity</option>
                                        <option>Special Privilege</option>
                                        <option>Others, specify</option>
                                    </select>
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div
                                    style={hide(spend != 'Vacation')}
                                    className="mb-4 col-md-3">
                                    <label>Vacation Details</label>
                                    <select
                                        {...register('Vacation')}
                                        onChange={(e) => {
                                            setvacation(e.target.value)
                                        }}
                                        className="form-control">
                                        <option selected disabled value="">
                                            Choose..
                                        </option>
                                        <option>To seek employment</option>
                                        <option>Sick</option>
                                        <option>Maternity</option>
                                        <option>Special Privilege</option>
                                        <option>Others, specify</option>
                                    </select>
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div
                                    style={hide(vacation != 'Others, specify')}
                                    className="mb-4 col-md-6">
                                    <label>Specify Vacation </label>
                                    <input
                                        {...register('VacationDetails')}
                                        className="form-control"
                                    />
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div
                                    style={hide(spend != 'Others, specify')}
                                    className="mb-4 col-md-9">
                                    <label>Specify spent</label>
                                    <input
                                        {...register('Specify')}
                                        className="form-control"
                                    />
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div
                                    style={hide(spend != 'Special Privilege')}
                                    className="mb-4 col-md-3">
                                    <label>Special Privilege</label>
                                    <select
                                        {...register('SpecialPrivilege')}
                                        className="form-control">
                                        <option selected disabled value="">
                                            Choose..
                                        </option>
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
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div
                                    style={hide(
                                        vacation != 'Special Privilege',
                                    )}
                                    className="mb-4 col-md-6">
                                    <label>Special Privilege</label>
                                    <select
                                        {...register(
                                            'SpecialPrivilegeVacation',
                                        )}
                                        className="form-control">
                                        <option selected disabled value="">
                                            Choose..
                                        </option>
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
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <h6
                                style={hide(spend != 'Vacation')}
                                className="mt-2 mb-4 bold text-info">
                                WHERE LEAVE WILL BE
                            </h6>
                            <h6
                                style={hide(spend != 'Sick')}
                                className="mt-2 mb-4 bold text-info">
                                WHERE LEAVE WILL BE
                            </h6>
                            <div className="mb-4 row">
                                <div
                                    style={hide(spend != 'Vacation')}
                                    className="mb-4 col-md-3">
                                    <label>In case of Vacation Leave</label>
                                    <select
                                        {...register('IncaseofVacationLeave')}
                                        onChange={(e) => {
                                            setlocation(e.target.value)
                                        }}
                                        className="form-control">
                                        <option selected disabled value="">
                                            Choose..
                                        </option>
                                        <option>Within the Philippines</option>
                                        <option>Specify Abroad</option>
                                    </select>
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div
                                    style={hide(location != 'Specify Abroad')}
                                    className="mb-4 col-md-9">
                                    <label>Specify Location in Abroad</label>
                                    <input
                                        {...register('SpecifyLocationinAbroad')}
                                        className="form-control"
                                    />
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div
                                    style={hide(spend != 'Sick')}
                                    className="mb-4 col-md-3">
                                    <label>In case of Sick Leave</label>
                                    <select
                                        {...register('IncaseofSickLeave')}
                                        onChange={(e) => {
                                            sethospital(e.target.value)
                                        }}
                                        className="form-control">
                                        <option selected disabled value="">
                                            Choose..
                                        </option>
                                        <option>Out Patient</option>
                                        <option>Specify Hospital</option>
                                    </select>
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div
                                    style={hide(hospital != 'Specify Hospital')}
                                    className="mb-4 col-md-9">
                                    <label>Specify Hospital </label>
                                    <input
                                        {...register('SpecifyHospital')}
                                        className="form-control"
                                    />
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="mt-2 mb-4 bold text-info">
                                        NUMBER OF DAYS APPLIED FOR
                                    </h6>
                                    <label>Days</label>
                                    <input
                                        {...register('Days')}
                                        placeholder="0"
                                        className="form-control"
                                    />
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="mt-2 mb-4 bold text-info">
                                        COMUTATION
                                    </h6>
                                    <label>Select Comutation</label>
                                    <select
                                        {...register('Comutation')}
                                        className="form-control">
                                        <option selected disabled value="">
                                            Choose..
                                        </option>
                                        <option>Requested</option>
                                        <option>Not Requested</option>
                                    </select>
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <label>DATE FROM</label>
                                    <input
                                        className="form-control"
                                        {...register('from_date')}
                                        type="date"
                                    />

                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                                <div className="col-md-6">
                                    <label>DATE TO</label>
                                    <input
                                        className="form-control"
                                        {...register('to_date')}
                                        type="date"
                                    />
                                    <h6 className="mt-2 text-danger-lighter small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="mt-5 mb-4 d-flex aij jcc">
                                <button
                                    disabled={disabled}
                                    className="float-right btn btn-dark">
                                    {disabled == true ? (
                                        <div className="d-flex aic jcc">
                                            <div
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                            />
                                        </div>
                                    ) : (
                                        'Submit Leave Application'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
