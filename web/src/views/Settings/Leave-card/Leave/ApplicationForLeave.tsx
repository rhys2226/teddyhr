import React from 'react'
import { Fire } from '../../../../components/Alerts/Alert'

export default function ApplicationForLeave() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 card p-5">
                <div className="card card-body"><
                    br />
                    <h5 className="text-center bold">APPLICATION FOR LEAVE</h5>
                    <br />

                    <div className="row mb-4">
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">OFFICE/AGENCY</label>
                            <input className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">(Last)</label>
                            <input value="N/A" disabled type="text" className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">(Given)</label>
                            <input value="N/A" disabled type="text" className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">(Middle) </label>
                            <input value="N/A" disabled type="text" className="form-control" />
                        </div>
                    </div>

                    <h6 className="bold  text-danger">DETAILS OF APPLICATION</h6>
                    <h6 className="bold mt-2 mb-4 text-primary">(A) TYPE OF LEAVE</h6>
                    <div className="row mb-4">
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">SPENT</label>
                            <select className="form-control" >
                                <option selected disabled>Choose..</option>
                                <option>Vacation</option>
                                <option>Sick</option>
                                <option>Maternity</option>
                                <option>Special Privilege</option>
                                <option>Others, specify</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Specify spent</label>
                            <input disabled className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Vacation Details</label>
                            <select className="form-control" >
                                <option selected disabled>Choose..</option>
                                <option>To seek employment</option>
                                <option>Sick</option>
                                <option>Maternity</option>
                                <option>Special Privilege</option>
                                <option>Others, specify</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Specify Vacation </label>
                            <input disabled className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Special Privilege</label>
                            <select className="form-control" >
                                <option selected disabled>Choose..</option>
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
                        </div>
                    </div>

                    <h6 className="bold mt-2 mb-4 text-primary">(B) WHERE LEAVE WILL BE</h6>
                    <div className="row mb-4">
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">In case of Vacation Leave</label>
                            <select className="form-control" >
                                <option selected disabled>Choose..</option>
                                <option>Within the Philippines</option>
                                <option>Abroad, specify:</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Specify Location in Abroad</label>
                            <input disabled className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">In case of Sick Leave</label>
                            <select className="form-control" >
                                <option selected disabled>Choose..</option>
                                <option>Out Patient</option>
                                <option>In Hospital,  specify:</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Specify Hospital </label>
                            <input disabled className="form-control" />
                        </div>
                    </div>

                    <h6 className="bold mt-2 mb-4 text-primary">( C ) NUMBER OF DAYS APPLIED FOR</h6>
                    <div className="row mb-4">
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Days</label>
                            <input className="form-control" />
                        </div>
                    </div>

                    <h6 className="bold mt-2 mb-4 text-primary">6. ( D ) COMUTATION</h6>
                    <div className="row mb-4">
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Select Comutation</label>
                            <select className="form-control" >
                                <option selected disabled>Choose..</option>
                                <option>Requested</option>
                                <option>Not Requested</option>
                            </select>
                        </div>
                    </div>


                    <h6 className="bold  text-danger">DETAILS OF ACTION TAKEN</h6>
                    <div className="row mb-4">
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">As of</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Vacation</label>
                            <input value="0" disabled type="text" className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Sick</label>
                            <input value="0" disabled type="text" className="form-control" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">Total</label>
                            <input value="0" disabled type="text" className="form-control text-success bold" />
                        </div>
                    </div>

                    <div className="mt-5 mb-4 d-flex aij jcc">
                        <button onClick={() => {
                            Fire(
                                'Submit Leave Application?',
                                'This will be subject for approval from the administrative officer and other related personnels',
                                'info',
                                () => { }
                            )
                        }} className="btn btn-outline-primary">Submit Leave Application</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
